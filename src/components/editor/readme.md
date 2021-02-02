# enjin-editor



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                          | Type     | Default                    |
| ----------------- | ------------------- | ---------------------------------------------------- | -------- | -------------------------- |
| `fileStoragePath` | `file-storage-path` | The folder to put images uploaded via the editor in  | `string` | `undefined`                |
| `placeholder`     | `placeholder`       | The placholder text to show when the editor is empty | `string` | `"Let's Write Something!"` |
| `tools`           | `tools`             | Custom tools you want to pass to Editor.js           | `any`    | `{}`                       |
| `userId`          | `user-id`           | The userId of the author                             | `string` | `undefined`                |


## Events

| Event         | Description                                   | Type               |
| ------------- | --------------------------------------------- | ------------------ |
| `enjinChange` | An event emitted on each change in the editor | `CustomEvent<any>` |


## Methods

### `exportHTML() => Promise<string>`

Export the editor as a string of HTML

#### Returns

Type: `Promise<string>`



### `getInstance() => Promise<any>`

Get the Editor.js instance

#### Returns

Type: `Promise<any>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
