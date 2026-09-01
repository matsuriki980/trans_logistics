## 作品概要
架空の物流会社 「トランス物流株式会社」のコーポレートサイトのTOPページ。  
「ココナラ」で購入したデザインカンプを再現しました。  
デザインカンプをもとにHTML、CSS、JavaScriptでコーディング。  
レスポンシブ対応を行い、PC・スマートフォンで閲覧できるようにしました。

### 提供元
[AmotDesign様](https://coconala.com/services/3024603?ref=talkroom)

## URL
[https://matsuyamarikiya.jp/trans_logistics/src/](https://matsuyamarikiya.jp/trans_logistics/src/)

## 使用技術
- HTML
- CSS
- JavaScript
- Git
- GitHub

## 実装した機能
- ハンバーガーメニュー
- Intersection Observer APIを使用したフェードインアニメーション
- スクロール位置に応じたページトップボタンの表示
- レスポンシブ対応

## こだわった点・工夫点

### CSS設計
CSS設計にはFROCSSとBEMを採用しました。  
スタイルを役割ごとに整理し、クラス名から要素の役割や構造が把握しやすい設計を意識しています。  
これにより、修正時の影響範囲を把握しやすくし、保守性・可読性の向上につなげました。

### JavaScriptの実行範囲
ハンバーガーメニューなど、スマートフォン表示時にのみ必要な機能については、  
JavaScriptで画面幅を判定し、PC表示時には不要な処理を実行しないようにしています。  
必要な画面サイズでのみ処理を実行することで、不要なイベント処理を減らし、機能ごとの責務を明確にすることを意識しました。

### JavaScriptの再利用性
複数の要素に対して同じアニメーション処理を適用できるように、  
共通のクラス名を使用して処理を管理しました。

### Intersection Observer API
スクロールイベントを使用するのではなく、Intersection Observer APIを使用して要素の表示状態を監視しています。  
これにより、スクロールのたびに処理を実行することを避け、必要なタイミングでのみ処理を実行することで、不要なイベント処理を減らしました。

## ディレクトリ構成
```text
project/
    └── src/
         ├── assets/
         │      ├── css/
         │      ├── images/
         │      └── js/
         |           ├── component/
         │           |   ├── header-menu.js
         │           |   └── page-top-btn.js
         |           |
         |           ├── modules/
         │           |    └── scroll.js
         │           |
         |           └── main.js
         |
         └── index.html
