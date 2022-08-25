# Photo Search Application

This project was scaffolded using [nextjs-with-typescript-example-template](https://github.com/binodnepali/nextjs-with-typescript-example-template).

## Prerequisition

Make sure you have installed [Node.js 12.22.0 or higher](https://nodejs.org/en/) on your machine. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple node version on your machine.

- [Mui](https://mui.com/) is used for crafting UI component
- [Formik](https://formik.org/docs/overview) and [Yup](https://www.npmjs.com/package/yup) are used for implementing Form component and Validation
- [SWR](https://swr.vercel.app/) and [Axios](https://github.com/axios/axios) are used for developing api request and api client

## Getting started

You can setup this project using npm or yarn package managers.

> I would recommend to installed or enabled [yarn](https://yarnpkg.com/getting-started) 1.22.15 or higher on your machine.

### Clone repo

```bash
git clone https://github.com/aungkoko1234/senior-fullstack-nextjs-search.git
#or
git@github.com:aungkoko1234/senior-fullstack-nextjs-search.git
```

### Navigate to cloned repo

```bash
cd senior-fullstack-nextjs-search
```

### Install dependencies

```bash
yarn install
#or
npm install
```

### Start development server

```bash
yarn dev
#or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing
I have written some UI test with Jest and api unit testing with [https://www.npmjs.com/package/node-mocks-http](node-mocks-http),[https://www.npmjs.com/package/jest](jest).
You can test the project with following command.

```bash
yarn test
#or
npm run test
```


### Build for production

```bash
yarn build
#or
npm run build
```

### Start preview server after build

```bash
yarn start
#or
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run release

Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) in your repository. And when you're ready to release, run below scripts.

```bash
yarn release
#or
npm run release
```

### Deployment
Currently I have deployed the project on [Vercel](https://vercel.com/) and you can check the updated project at [here](https://senior-fullstack-nextjs-search.vercel.app/)
