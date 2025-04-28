# TICF (Tokyo International Christian Fellowship)

[English](README.md) | **日本語** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [TICF (Tokyo International Christian Fellowship)](#ticf-tokyo-international-christian-fellowship)
  - [概要](#概要)
  - [特徴](#特徴)
  - [インストール](#インストール)
  - [設定](#設定)
  - [コンポーネント](#コンポーネント)
  - [多言語サポート](#多言語サポート)
  - [メンテナ](#メンテナ)
  - [ライセンス](#ライセンス)

## 概要

主にある平安、ようこそ。

このプロジェクトは、東京国際クリスチャンフェローシップ（TICF）のウェブサイトです。React、TypeScript、Vite、Tailwind CSSを使用して構築されており、英語、中国語、日本語を含む複数の言語をサポートしています。

## 特徴

- 多言語サポート（英語、中国語、日本語）
- レスポンシブデザイン
- 自動的なダーク/ライトモードの切り替え

## インストール

1. リポジトリをクローン：

   ```sh
   git clone https://github.com/FantiGA/ticf-ic.com.git
   cd ticf-ic.com
   ```

2. 依存関係をインストール：

   ```sh
   npm install
   ```

3. 開発サーバーを実行：

   ```sh
   npm run dev
   ```

4. プロジェクトをビルド：

   ```sh
   npm run build
   ```

5. 静的ファイルをエクスポート：
   ```sh
   npm run export
   ```

## 設定

プロジェクトを設定するには、必要に応じて `tsconfig.json` と `vite.config.ts` ファイルを更新します。プロジェクト構造に合わせてパスエイリアスが正しく設定されていることを確認してください。

## コンポーネント

プロジェクトは `src/components` ディレクトリにあるいくつかのコンポーネントに分かれています。各コンポーネントはウェブサイトの特定の部分を担当します。例えば：

- `Header`：ナビゲーションバーと言語切り替えを含む。
- `Banner`：メインバナー画像を表示。
- `Welcome`：歓迎メッセージを提供。
- `OurMission`：教会の使命を説明。
- `OurVision`：教会のビジョンを説明。
- `OurCoreValue`：教会のコアバリューをリスト。
- `OurFaithStatment`：信仰声明を提供。
- `WorshipServiceInformation`：礼拝情報を含む。
- `Contact`：連絡先情報を提供。
- `Footer`：ウェブサイトのフッターを含む。

## 多言語サポート

プロジェクトは `i18next` と `react-i18next` を使用して多言語をサポートしています。翻訳ファイルは `src/locales` ディレクトリにあります。翻訳を追加または変更するには、対応する JSON ファイルを更新します：

- `en.json`：英語の翻訳
- `ja.json`：日本語の翻訳
- `zh-CN.json`：中国語の翻訳

## メンテナ

[@FantiGA](https://github.com/FantiGA) [@wangbodang](https://github.com/wangbodang)

## ライセンス

[MIT](LICENSE) © 2025 [TICF](https://ticf-ic.com)
