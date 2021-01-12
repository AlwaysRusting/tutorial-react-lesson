# React チュートリアル

## Lesson1 環境構築して React に触ってみよう 🐰🥕

### 🌞 環境構築のためにインストールするもの 🌝

1. GIT（プロジェクトのバージョン管理するやつだよ🐮）
2. Node.jsとnpm（JavaScriptをいろいろ使えるようにするやつだよ🐷）
3. Yarn（2で入れたnpmを便利にするやつだよ🐴）

---

### 1. GITをインストールしちゃおう🐮

1-1. やり方は簡単！GITの公式ページのインストーラでインストールするだけ！これでプロジェクトのバージョン管理をするよ。`Visual Studio Code` とかインストールしないと使えない開発ツールとかあるから絶対入れておいてね🎵  
🌎 [Git Windows版ダウンロードページ](!https://git-scm.com/download/win)  

インストールが終わったら、`PowerShell`や`コマンドプロンプト`を開いて確認してみよう。ちゃんとバージョンが表示されたら成功だよ👍

```console
> git --version
git version 2.27.0.windows.1
```

---

### 2. Node.jsとnpmもインストールする🐷

次は`Node.js`と`npm`をインストールするよ。`Node.js`がJavaScriptでいろんなことできるようにするライブラリで、`npm`がそのパッケージ管理ソフトね。`Node.js`をインストールすると相性ピッタリな`npm`も自動でインストールされるよ。  
<details>
<summary>どれをダウンロードすればいいの❓</summary>
✔ インストールするものは「最新版」で大丈夫だよ。きっとみんなが勉強してる間に「最新版」が「安定板」になっちゃうから。それくらいこの世界は進化が早いんだ🐷
</details>  
<details>
<summary>インストールで困っちゃった❓</summary>
✔ Node.jsをインストールするときのダイアログは全部そのままOKでいいよ。必要なものができたらあとでインストールできるから、まずはシンプルにインストールしちゃお🐷
</details>  
  
🌎 [Node.js ダウンロードページ](!https://nodejs.org/ja/)  
  
こっちもインストールが終わったらちゃんとバージョンが表示されるか確認しようね😉  
  
```console
> node --version
v15.5.1

> npm --version
v7.3.0
```

---

### Node.jsとnpmの対応表

[https://nodejs.org/ja/download/releases/](!https://nodejs.org/ja/download/releases/)

---

### Storybookの導入

```console
npx -p @storybook/cli sb init --type react_scripts
```

---

### npmでglobalにインストールさせるパッケージ

- @react-native-community
- babel-cli
- create-react-app
- expo-cli
- npm-check-updates
- typedoc
- yarn

```console
npm i -g npm-check-updates
npm i -g yarn
npm i -g @react-native-community
npm i -g create-react-app
npm i -g expo-cli
```
