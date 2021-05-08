export default class Code {
  api: any;
  readOnly: boolean;
  placeholder: string;
  CSS: any;
  data: any;
  aceWidgetEl: any;
  resizeDebounce: any;
  block;

  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Should this tool be displayed at the Editor's Toolbox
   *
   * @returns {boolean}
   * @public
   */
  static get displayInToolbox() {
    return true;
  }

  /**
   * Allow to press Enter inside the RawTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon:
        '<svg width="19" height="13"><path d="M18.004 5.794c.24.422.18.968-.18 1.328l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.162-4.162-4.103-4.103A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.104.104.184.223.239.35zm-15.142.547l4.162 4.162a1.105 1.105 0 1 1-1.562 1.562L.519 7.122c-.36-.36-.42-.906-.18-1.328a1.13 1.13 0 0 1 .239-.35L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.862 6.341z"/></svg>',
      title: "Raw HTML",
    };
  }

  /**
   * @typedef {object} RawData — plugin saved data
   * @param {string} html - previously saved HTML code
   * @property
   */

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {RawData} data — previously saved HTML data
   * @param {object} config - user config for Tool
   * @param {object} api - CodeX Editor API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly, block }) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;

    this.placeholder = config.placeholder ? config.placeholder : "";

    this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: "ce-rawtool",
      textarea: "ce-rawtool__textarea",
    };

    this.data = {
      html: data.html || "",
    };

    this.aceWidgetEl = null;
    this.resizeDebounce = null;
  }

  injectScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.addEventListener("load", resolve);
      script.addEventListener("error", () => reject("Error loading script."));
      script.addEventListener("abort", () => reject("Script loading aborted."));
      document.head.appendChild(script);
    });
  }

  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.element - RawTool's wrapper
   * @public
   */
  render() {
    const wrapper = document.createElement("div");
    const renderingTime = 100;

    this.aceWidgetEl = document.createElement("ace-widget");
    this.aceWidgetEl.baseUrl = "/build/ace-builds/";
    this.aceWidgetEl.mode = "ace/mode/html";
    wrapper.classList.add(this.CSS.baseClass, this.CSS.wrapper);

    this.aceWidgetEl.classList.add(this.CSS.textarea, this.CSS.input);
    this.aceWidgetEl.textContent = this.data.html;
    this.aceWidgetEl.enableLiveAutocompletion = true;
    this.aceWidgetEl.enableSnippets = true;
    this.aceWidgetEl.placeholder = this.placeholder;

    if (this.readOnly) {
      this.aceWidgetEl.disabled = true;
    } else {
      this.aceWidgetEl.addEventListener("input", () => {
        this.onInput();
      });
    }

    wrapper.appendChild(this.aceWidgetEl);
    setTimeout(() => {
      this.resize();
      this.block.stretched = true;
      //this.aceWidgetEl.editor.setOption("enableEmmet", true);
    }, renderingTime);

    return wrapper;
  }

  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} rawToolsWrapper - RawTool's wrapper, containing textarea with raw HTML code
   * @returns {RawData} - raw HTML code
   * @public
   */
  save(_rawToolsWrapper) {
    return {
      html: this.aceWidgetEl?.editor?.getValue
        ? this.aceWidgetEl.editor.getValue()
        : "",
    };
  }

  /**
   * Default placeholder for RawTool's textarea
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_PLACEHOLDER() {
    return "Enter HTML code";
  }

  /**
   * Automatic sanitize config
   */
  static get sanitize() {
    return {
      html: true, // Allow HTML tags
    };
  }

  /**
   * Textarea change event
   *
   * @returns {void}
   */
  onInput() {
    console.log("w00");
    if (this.resizeDebounce) {
      clearTimeout(this.resizeDebounce);
    }

    this.resizeDebounce = setTimeout(() => {
      this.resize();
    }, 200);
  }

  /**
   * Resize textarea to fit whole height
   *
   * @returns {void}
   */
  resize() {
    console.log("weee");
    // this.aceWidgetEl.style.height = "auto";
    // this.aceWidgetEl.style.height = this.aceWidgetEl.scrollHeight + "px";
  }
}
