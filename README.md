# VPV Starter Toolkit in VitePress (SSR)

Welcome to the Vue PDF Viewer (VPV) starter toolkit! This repository provides a comprehensive guide on how to use VPV with VitePress via the Markdown and TypeScript. This repo showcases how VPV can be integrated and rendered as part of a VitePress project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Installation

To get started, please clone this repo to your local machine and install the dependencies:

```bash
git clone https://github.com/your-username/starter-vpv-vitepress.git
cd starter-vpv-vitepress
npm install
```

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

    ```bash
    git clone https://github.com/your-username/starter-vpv-vitepress.git
    cd starter-vpv-vitepress
    ```

2. **Install Dependencies**: Install the necessary dependencies using npm or yarn

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

_Remark: For `pnpm`, there is a bit more configuration required which can be found (here)[https://docs.vue-pdf-viewer.dev/troubleshooting.html#_3-resolving-peer-dependency-version-mismatch-with-pnpm]._

### Running the Example Project

This repo includes an example project to demonstrate how to use VPV. To run the example project:

1. **Serve the Application**: Use the following command to start the development server

    ```bash
    npm run docs:dev
    # or
    yarn docs:dev
    # or
    pnpm run docs:dev
    # or
    bun run docs:dev
    ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the example project in action

### Using the VPV Component

Once the example project is running, you can explore the source code to see how the VPV component is integrated. Here is a brief overview:

1. **Import the component**: Import the desired VPV component into your `md` file

    ```js
    import { useData, defineClientComponent } from 'vitepress'

    const VPdfViewer = defineClientComponent(() => {
      return import('@vue-pdf-viewer/viewer').then(({ VPdfViewer }) => VPdfViewer)
    })
    ```

2. **Use the component in the template**: Add the VPV component to your template section

    ```html
    <template>
      <div :style="{ width: '1028px', height: '700px'}">
        <VPdfViewer src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
      </div>
    </template>
    ```

3. **Ensure the configuration**: Add the following code to your `.vitepress/config.ts`

    ```js
      import { defineConfig } from 'vitepress'
      
      export default defineConfig({
        // ...
        themeConfig: {
          // ...
        },
        vite: {
          ssr: {
            noExternal: ['pdfjs-dist', '@vue-pdf-viewer/viewer']
          }
        }
      })
    ```

## Examples

For more examples, please refer to the `docs/*.md` files in this repository:
 - Desktop View
 - Mobile View

If you want to find out more configurations. Please check the [documentation](https://docs.vue-pdf-viewer.dev) site.

---

Thank you for using Vue PDF Viewer! We hope this toolkit helps you build amazing Nuxt applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
