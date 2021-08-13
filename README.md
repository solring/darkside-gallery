# Introduction

My personal gallery.

Created by create-react-app.

# Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run storybook`

Launch storybook server at [http://localhost:6006](http://localhost:6006).

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Build the project into `build` folder.

For more information please refer to [official Create-react-app website.](https://create-react-app.dev/docs/available-scripts)


# Folder Structure

Most part of the structure is the same with Create-react-app except for some extra folders:

- `src/assets/images/`: Contains images.

- `src/assets/style/`: Contains general stylesheets that can be in the whole site, including variables or global settings.
    - `configs/`: for variables and other settings.
    - `utils/`: for utilities such as mixins.

- `src/index.scss`: The unified entry of all scss stylesheets, which is included in `index.js` in place of the original `index.css`, whose content is moved to `src/assets/style/configs/_base.scss`.

- `src/components`: Contains js/jsx components and corresponding stylesheets (only used by that component).

- `src/stories`: Examples from Storybook. Could be removed.


# Notice about SCSS loader

Create-react-app defaultly use `node-sass` to build and import scss file. There is no problem directly importing scss files in js files like this:

``` js

import './style.scss';

```

However, for Storybook, the [default preset for scss](https://storybook.js.org/docs/react/addons/install-addons#using-preset-addons) will install the latest **style-loader/css-loader/scss-loader** depending on webpack 5, which is not supported by current Storybook(although it has [beta support](https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324) now) and Create-react-app. Therefore, after installing the preset, those loaders have to be downgraded to webpack-4-compatible versions manually.

``` json
    "style-loader": "^2.0.0",
    "css-loader": "^5.2.7",
    "sass-loader": "10.1.1"
```

Also, removing `@storybook/preset-creat-react-app` from `.storybook/main.js` is also required according [to this issue.](https://github.com/storybookjs/presets/issues/195)


## Reference

https://github.com/storybookjs/presets/issues/195
https://newbedev.com/syntax-error-sasserror-expected-code-example
