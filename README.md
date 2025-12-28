#React Dashboard App 

## 概要
TypeScript + Vite + React + Tailwind CSS v4 + Chart.js を使用したダッシュボードアプリです。
入力したデータを追加し、一覧表示とグラフ表示を行います。

## 使用技術
- TypeScript
- Vite
- React
- Tailwind CSS v4
- Chart.js
  
## 機能
- データ入力
- データ追加
- 一覧表示
- Chart.js によるグラフ表示
  
## 設計ポイント
- state とロジックを pages に集約
- components に表示責務のみ
- Chart.js を React コンポーネントから分離
  
## セットアップ手順
以下のコマンドを実行すると、ローカル環境でアプリが起動します。
```bash
npm install
npm run dev