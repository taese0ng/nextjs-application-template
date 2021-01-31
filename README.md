# Next.js Application Template <!-- omit in toc -->

This template has been bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and was extended with some opinionated additions and changes.

- [Template usage](#template-usage)
- [Customizations on top of `create-next-app`](#customizations-on-top-of-create-next-app)
  - [`.nvmrc` file](#nvmrc-file)
  - [Yarn 2 package manager](#yarn-2-package-manager)
  - [Enforcing strict code style](#enforcing-strict-code-style)
  - [Styled Components](#styled-components)
  - [Github workflow](#github-workflow)
  - [Absolute paths](#absolute-paths)
  - [VS Code settings](#vs-code-settings)
    - [Editor settings](#editor-settings)
    - [Extensions](#extensions)
    - [Launch settings](#launch-settings)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## Template usage

You can use this template directly via Github by clicking on the **Use this template** button which allows you to create a new repository based on this template.
Alternatively you can clone this repository and delete the corresponding `.git` and initialize a new repository in the same folder to start.

In either case delete the [`renovate.json`](./renovate.json) file which is used to keep the template repository up-to-date using [renovate](https://github.com/renovatebot/renovate).
Alternatively replace its contents with your own credentials and configuration if you use renovate yourself.

## Customizations on top of `create-next-app`

The following is a list of all the customizations made on top of `create-next-app`.
They are in no particular order.

### `.nvmrc` file

There exists an automatically updated `.nvmrc` file that pins the current LTS version of Node.js this application should be compiled with.
It is recommended to use the [Node Version Manager](https://github.com/nvm-sh/nvm) in combination with the supplied `.nvmrc` file.

### Yarn 2 package manager

Instead of using `npm` as the default package manager this project relies on `yarn`, specifically yarn 2.
The latest version of yarn 2 is checked into the repository and will be automatically picked up by classic yarn.
However the latter has to be installed using `npm i -g yarn` first if you haven't done that yet.

No Plug-and-Play features have been enabled and a classic `node_modules` folder will be available for compatibility reasons.

Furthermore it is highly recommended to install all dependencies using `yarn add --exact <package-name>` to pin the versions right away.
On top that you don't need to distinguish between `dependencies` and `devDependencies` since this application is bundled automatically and doesn't take that separation into consideration at all.

### Enforcing strict code style

To enforce a consistent code style this project has been configured to make use of `eslint-config-airbnb-typescript`.
This package includes sensible rules and settings for working with React and Typescript.
Together with eslint, editorconfig and prettier all files should be automatically formatted according to the strict rules defined in that package.
If you want to change any rule to fit your own code style you can change the settings in the [`.eslintrc`](./.eslintrc) file.

### Styled Components

Styling via raw CSS or SCSS files has been dropped from the bootstrapped project and replaced with [Styled Components](https://styled-components.com/), a popular CSS-in-JS library.
In addition `styled-normalize` as the `normlize.css` wrapper for use with Styled Components has been added to the project.
For more details please refer to the [`src/components/app/app.tsx`](./src/components/app/app.tsx) file as well as [`src/styles/global-styles.ts`](./src/styles/global-styles.ts).

### Github workflow

You will find an initial [`.github/workflows/tests.yml`](./.github/workflows/tests.yml) workflow file that will run for changes on the `main` branch.
Currently only the linter is being executed.
This is the place where you'd add tests to be executed prior to deployment.

### Absolute paths

In the [`tsconfig.json`](./tsconfig.json) file the `baseUrl` property has been enabled to allow importing files using their absolute path:

```ts
// Instead of this
import { FancyMixin } from '../../../styles/mixins';
// You can write this
import { FancyMixin } from 'styles/mixins';
```

This feature makes it easy to reference files rather than counting how many `..` parts belong to a specific path and refactoring and moving files no longer incurs updating that many paths across the application.

### VS Code settings

#### Editor settings

Via the [`.vscode/settings.json`](./.vscode/settings.json) some sensible settings have been enabled:

* Automatically formatting files and fixing linter issues when saving a file.
* Organizing imports when saving a file.
* Hiding certain files and folders, including the `node_modules` and `.next` folder itself from the file explorer.
* Certain Typescript-related settings for consistent code style.

#### Extensions

This template projects includes a custom [`.vscode/extensions.json`](./.vscode/extensions.json) file that prompts you to install recommended extensions in VS Code for use with the template.
Recommended extensions are the following:

* **Debugger for Chrome** - Mandatory plugin to debug React application from within VS Code.
* **DotENV** - Support for syntax highlighting in `.env` files.
* **EditorConfig for VS Code** - Enable support for the code style declared with the `.editorconfig` file.
* **ESLint VSCode Plugin** - Run eslint within VSCode to lint your code.
* **Path Intellisense** - Better path autocompletion outside of import statements, such as paths to images, stylesheets etc.
* **Prettier - Code formatter** - Format code using prettier and our supplied settings in the `.prettierrc` file rather than relying on the VS Code formatter.
* **Visual Studio IntelliCode** - AI-assisted code completion suggestions.
* **vscode-styled-components** - Code completion and highlighting of CSS code within styled component template literals.

#### Launch settings

In the [`.vscode/launch.json`](./.vscode/launch.json) file a default debugging task for running Chrome has been declared.
You can start debugging the application using this task.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
