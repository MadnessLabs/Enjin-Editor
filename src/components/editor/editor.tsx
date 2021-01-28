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
import "split-me";
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
import SplitPane from "./blocks/SplitPane";

@Component({
  tag: "enjin-editor",
  styleUrl: "editor.css",
})
export class EnjinEditor implements ComponentInterface {
  editorJS: EditorJS;

  @Element() editorEl: HTMLEnjinEditorElement;

  @Prop() placeholder = "Let's Write Something!";
  @Prop() userId: string;
  @Prop() tools: any = {};

  @Event() enjinChange: EventEmitter;

  @Method()
  async getInstance(): Promise<any> {
    return this.editorJS;
  }

  @Method()
  async exportHTML(): Promise<string> {
    return new edjsParser(null, {
      button: (data) => {
        return `<ion-button shape="${data.shape ? data.shape : "square"}">${
          data.text
        }</ion-button>`;
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
                      .ref(`/users/${this.userId}/${file.name}`)
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
          table: {
            class: Table,
          },
          page: Page,
          splitPane: {
            class: SplitPane,
            inlineToolbar: true,
          },
          raw: Raw,
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