export default class Button {
  settings = [
    {
      name: "shape",
      icon: `<svg width="20" height="20" xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Shapes</title><path fill="currentColor" d='M336 336H32a16 16 0 01-14-23.81l152-272a16 16 0 0127.94 0l152 272A16 16 0 01336 336z'/><path fill="currentColor" d='M336 160a161.07 161.07 0 00-32.57 3.32l74.47 133.27A48 48 0 01336 368H183.33A160 160 0 10336 160z'/></svg>`,
      value: "square",
    },
  ];
  data: any;
  api: any;

  static get toolbox() {
    return {
      title: "Button",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20" width="20"><path fill="currentColor" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"/></svg>',
    };
  }

  constructor({ data, api }) {
    this.data = { text: "New Button", shape: "square", ...data };
    this.api = api;
  }

  render() {
    const buttonEl = document.createElement("ion-button");
    if (this.data?.shape) {
      buttonEl.shape = this.data.shape;
    }
    buttonEl.innerHTML = `<div contenteditable="true">${this.data?.text}</div>`;
    return buttonEl;
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
      shape: button.shape ? button.shape : "square",
    };
  }
}
