import {
  ComponentInterface,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
  Method,
  Host,
} from "@stencil/core";
import firebase from "firebase/app";
import "firebase/storage";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Paragraph from "editorjs-paragraph-with-alignment";
import EditorJSStyle from "editorjs-style";
import edjsParser from "editorjs-parser";
import Table from "@editorjs/table";
import { MDParser, MDImporter } from "editorjsMdParser";
import Button from "./blocks/Button";
import Page from "./blocks/Page";
import Raw from "@editorjs/raw";
import Partial from "./blocks/Partial";
import Tasklist from "./blocks/Tasklist";

@Component({
  tag: "enjin-editor",
  styleUrl: "editor.css",
})
export class EnjinEditor implements ComponentInterface {
  editorJS: EditorJS;

  @Element() editorEl: HTMLEnjinEditorElement;

  /**
   * The placholder text to show when the editor is empty
   */
  @Prop() placeholder = "Let's Write Something!";
  /**
   * The userId of the author
   */
  @Prop() userId: string;
  /**
   * The folder to put images uploaded via the editor in
   */
  @Prop() fileStoragePath: string;
  /**
   * Custom tools you want to pass to Editor.js
   */
  @Prop() tools: any = {};
  /**
   *  A list of template partials to use or a function to run to get template partials
   */
  @Prop() partials: any;
  /**
   *  Is the editor in read only mode
   */
  @Prop() readOnly = false;
  /**
   *  Should the editor focus on load
   */
  @Prop() autofocus = true;

  /**
   * An event emitted on each change in the editor
   */
  @Event() enjinChange: EventEmitter;

  /**
   * Get the Editor.js instance
   */
  @Method()
  async getInstance(): Promise<any> {
    return this.editorJS;
  }

  /**
   * Export the editor as a string of HTML
   */
  @Method()
  async exportHTML(): Promise<string> {
    return new edjsParser(null, {
      button: (data) => {
        const classes =
          data.align === "center"
            ? "enjin-align-center"
            : data.align === "right"
            ? "enjin-align-right"
            : "enjin-align-left";
        return `<ion-button shape="${
          data.shape ? data.shape : "square"
        }" color="${
          data.color ? data.color : "primary"
        }" class="${classes}" href="${data.href ? data.href : "#"}">${
          data.text
        }</ion-button>`;
      },
      partial: (data) => {
        return `<div class="editor-partial">{{> ${data.templateId}}}</div>`;
      },
      tasklist: (data) => {
        const color = data?.color ? data.color : "success";
        const progress = data?.progress ? data.progress : 0;
        const html = ["<ion-list>"];
        for (const item of data?.items ? data.items : []) {
          html.push(
            `<ion-item><ion-checkbox slot="start" color="${color}" ${
              item.checked ? `checked="true"` : ""
            }></ion-checkbox><ion-label>${item.text}</ion-label></ion-item>`
          );
        }
        html.push(
          `<ion-progress-bar color="${color}" value="${progress}"></ion-progress-bar>`,
          "</ion-list>"
        );
        return html.join("");
      },
    }).parse(await this.editorJS.save());
  }

  componentDidLoad() {
    this.editorJS = new EditorJS({
      onChange: () => {
        this.enjinChange.emit({ instance: this.editorJS });
      },
      placeholder: this.placeholder,
      holder: this.editorEl,
      readOnly: this.readOnly,
      autofocus: this.autofocus,
      tools: {
        ...{
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          header: {
            class: Header,
            inlineToolbar: true,
          },
          button: {
            class: Button,
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: (file) => {
                  return new Promise((resolve, reject) => {
                    const uploadTask = firebase
                      .storage()
                      .ref(
                        `${
                          this.fileStoragePath
                            ? this.fileStoragePath
                            : this.userId
                            ? `/users/${this.userId}`
                            : "/enjin-editor"
                        }/${file.name}`
                      )
                      .put(file, {});
                    uploadTask.on(
                      "state_changed",
                      function (snapshot) {
                        var progress =
                          (snapshot.bytesTransferred / snapshot.totalBytes) *
                          100;
                        console.log("Upload is " + progress + "% done");
                        switch (snapshot.state) {
                          case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log("Upload is paused");
                            break;
                          case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log("Upload is running");
                            break;
                        }
                      },
                      function (error) {
                        reject(error);
                      },
                      function () {
                        uploadTask.snapshot.ref
                          .getDownloadURL()
                          .then(function (url) {
                            resolve({
                              success: true,
                              file: {
                                url,
                              },
                            });
                          });
                      }
                    );
                  });
                },

                /**
                 * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                 * @param {string} url - pasted image URL
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByUrl: async (url) => ({
                  success: true,
                  file: {
                    url,
                  },
                }),
              },
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          tasklist: {
            class: Tasklist,
            inlineToolbar: true,
          },
          table: {
            class: Table,
          },
          page: Page,
          raw: Raw,
          partial: {
            class: Partial,
            config: {
              partials: this.partials ? this.partials : null,
            },
          },
          editorJSStyle: EditorJSStyle,
          markdownParser: MDParser,
          markdownImporter: MDImporter,
          embed: {
            class: Embed,
          },
        },
        ...this.tools,
      },
    });
  }

  render() {
    return <Host />;
  }
}
