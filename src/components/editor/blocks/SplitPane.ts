export default class SplitPane {
  settings = [
    {
      name: "columns",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"/></svg>`,
      value: 2,
    },
  ];
  data: any;
  api: any;

  static get toolbox() {
    return {
      title: "Split Pane",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"/></svg>',
    };
  }

  constructor({ data, api }) {
    this.data = data;
    this.api = api;
  }

  render() {
    const splitMeEl: any = document.createElement("split-me");
    splitMeEl.n = 2;
    splitMeEl.innerHTML = `<div slot="0" style="height: 100%; width: 100%;" contentEditable></div>
    <div slot="1" style="height: 100%; width: 100%;" contentEditable></div>`;

    return splitMeEl;
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    this.settings.forEach((setting) => {
      let button = document.createElement("div");
      button.classList.add("cdx-settings-button");
      button.innerHTML = setting.icon;
      button.addEventListener("click", () => {
        try {
          const buttonEl = this.api.blocks
            .getBlockByIndex(this.api.blocks.getCurrentBlockIndex())
            .holder.querySelector("ion-button");
          buttonEl.shape = buttonEl.shape === "round" ? "square" : "round";
        } catch (err) {
          console.log("Error setting button shape!");
        }
      });

      wrapper.appendChild(button);
    });

    return wrapper;
  }

  save(button) {
    return {
      text: button.innerText,
    };
  }
}
