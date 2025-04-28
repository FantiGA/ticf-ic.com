# TICF (Tokyo International Christian Fellowship)

[English](README.md) | [日本語](README.ja.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [TICF (Tokyo International Christian Fellowship)](#ticf-tokyo-international-christian-fellowship)
  - [概述](#概述)
  - [特点](#特点)
  - [安装](#安装)
  - [配置](#配置)
  - [组件](#组件)
  - [多语言支持](#多语言支持)
  - [维护者](#维护者)
  - [许可证](#许可证)

## 概述

主内平安，欢迎访问。

本项目是东京国际基督徒团契（TICF）的网站。它使用 React、TypeScript、Vite 和 Tailwind CSS 构建，并支持包括英语、中文和日语在内的多种语言。

## 特点

- 多语言支持（英语、中文、日语）
- 响应式设计
- 自动切换深色/浅色模式

## 安装

1. 克隆仓库：

   ```sh
   git clone https://github.com/FantiGA/ticf-ic.com.git
   cd ticf-ic.com
   ```

2. 安装依赖：

   ```sh
   npm install
   ```

3. 运行开发服务器：

   ```sh
   npm run dev
   ```

4. 构建项目：

   ```sh
   npm run build
   ```

5. 导出静态文件：
   ```sh
   npm run export
   ```

## 配置

要配置项目，请根据需要更新 `tsconfig.json` 和 `vite.config.ts` 文件。确保路径别名正确设置以匹配项目结构。

## 组件

项目分为几个位于 `src/components` 目录中的组件。每个组件负责网站的特定部分。例如：

- `Header`：包含导航栏和语言切换器。
- `Banner`：显示主横幅图像。
- `Welcome`：提供欢迎信息。
- `OurMission`：描述教会的使命。
- `OurVision`：描述教会的愿景。
- `OurCoreValue`：列出教会的核心价值观。
- `OurFaithStatment`：提供信仰声明。
- `WorshipServiceInformation`：包含礼拜信息。
- `Contact`：提供联系信息。
- `Footer`：包含网站的页脚。

## 多语言支持

项目使用 `i18next` 和 `react-i18next` 支持多语言。翻译文件位于 `src/locales` 目录中。要添加或修改翻译，请更新相应的 JSON 文件：

- `en.json`：英语翻译
- `ja.json`：日语翻译
- `zh-CN.json`：中文翻译

## 维护者

[@FantiGA](https://github.com/FantiGA) [@wangbodang](https://github.com/wangbodang)

## 许可证

[MIT](LICENSE) © 2025 [TICF](https://ticf-ic.com)
