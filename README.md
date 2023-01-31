# 🧑‍💻 Gatsby / Contentful / AsurionUI demo / dev environment

## 🔍 Overview

This repo provides provides a [GatsbyJS](./docs/Gatsby-README.md) environment for creating and/or testing Asurion UI components. It also includes Styled Components, and the ability to consume Contentful content. Additionally, it may be useful for reviewing and testing pull requests made against Asurion UI

## 🤝 Collaboration

Your contributions are welcome! Feel free to open pull requests for improvements to this project

## 🛠️ Setup

### Repo setup

1. Clone the repo to your local system: `git clone git@github.com:Soluto-Private/asurion-ui-dev.git`
1. Run `yarn` to install the project's dependencies
1. Follow the Env setup instructions (below)
1. Run `yarn start` to spin up the local development server

### Env setup

Copy `example.env` to `.env`, then in that file update the following:

1. If you want to use your local copy of AUI, set the `BUILD_LOCAL_AUI` value to `true` and update the `RELATIVE_PATH_TO_AUI` to match the relative path to the AsurionUI repo on your local system
1. If you have a Contentful environment, update the `CONTENTFUL_SPACE_ID` AND `CONTENTFUL_ACCESS_TOKEN`s with the appropriate values. (If no space id is provided, the Contentful plugin won't be loaded)

### Updating AUI

To install or reinstall Asurion UI, run `yarn update-aui`. This will uninstall the current version (if already installed), clean Gatsby's file cache, and install either the local copy of AUI, or the latest release, depending on the value of `BUILD_LOCAL_AUI` (`true`/`false`)

## 🔬 More information

For more information on Contentful and GatsbyJS, [check out this document](./docs/contentful-gatsby.md)
