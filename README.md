# TICF (Tokyo International Christian Fellowship)

**English** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [TICF (Tokyo International Christian Fellowship)](#ticf-tokyo-international-christian-fellowship)
  - [Overview](#overview)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Components](#components)
  - [Multi-language Support](#multi-language-support)
  - [Maintainers](#maintainers)
  - [License](#license)

## Overview

Welcome in Christ.

This project is a website for the Tokyo International Christian Fellowship (TICF). It is built using Next.JS, React, TypeScript, and Tailwind CSS, and supports multiple languages including English, Chinese, and Japanese.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/FantiGA/ticf-ic.com.git
   cd ticf-ic.com
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

4. Build the project:

   ```sh
   npm run build
   ```

## Configuration

To configure the project, update the `tsconfig.json` and `.prettierrc.js` files as needed. Ensure that the path aliases are correctly set up for the project structure.

## Components

The project is divided into several components located in the `components` directory. Each component is responsible for a specific part of the website. For example:

- `Header`: Contains the navigation bar and language switcher.
- `Banner`: Displays the main banner image.
- `Welcome`: Provides a welcome message.
- `OurMission`: Describes the mission of the church.
- `OurVision`: Describes the vision of the church.
- `OurCoreValue`: Lists the core values of the church.
- `OurFaithStatment`: Provides the faith statement.
- `WorshipServiceInformation`: Contains information about worship services.
- `Contact`: Provides contact information.
- `Footer`: Contains the footer of the website.

## Multi-language Support

The project supports multiple languages using `next-intl`. The translation files are located in the `locales` directory. To add or modify translations, update the corresponding JSON files:

- `en.json`: English translations
- `ja.json`: Japanese translations
- `zh-CN.json`: Chinese translations

## Maintainers

[@FantiGA](https://github.com/FantiGA) [@wangbodang](https://github.com/wangbodang)

## License

[MIT](LICENSE) © 2025 [TICF](https://ticf-ic.com)
