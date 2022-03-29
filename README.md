# React チュートリアル

## 環境構築して React に触ってみよう 🐰🥕

1. [GITをインストールしちゃおう🐮](#1.%20GITをインストールしちゃおう🐮)
2. [Node.jsとnpmもインストールする🐷](#2.%20Node.jsとnpmもインストールする🐷)
3. [Yarnをインストールしちゃう🐴](#3.%20Yarnをインストールしちゃう🐴)
4. [GITを使ってみよう🐶](#4.%20GITを使ってみよう🐶)
5. [Reactに触ってみよう🐰](#5.%20Reactに触ってみよう🐰)

---

### 1. GITをインストールしちゃおう🐮

やり方は簡単！GITの公式ページのインストーラでインストールするだけ！これでプロジェクトのバージョン管理をするよ。`Visual Studio Code` とかインストールしないと使えない開発ツールとかあるから絶対入れておいてね🎵  
🌎 [Git Windows版ダウンロードページ](https://git-scm.com/download/win)  

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
✔ インストールするものは「最新版」で大丈夫だよ。きっとみんなが勉強してる間に「最新版」が「安定板」になっちゃうからね。まずは気にしないでインストールしてみよう🐷
</details>  
<details>
<summary>インストールで困っちゃった❓</summary>
✔ Node.jsをインストールするときのダイアログは全部そのままOKでいいよ。必要なものができたらあとでインストールできるから、まずはシンプルにインストールしちゃお🐷
</details>  
  
🌎 [Node.js ダウンロードページ](https://nodejs.org/ja/)  
  
こっちもインストールが終わったらちゃんとバージョンが表示されるか確認しようね😉  
  
```console
> node --version
v15.5.1

> npm --version
v7.3.0
```

---

### 3. Yarnをインストールしちゃう🐴

`Yarn`は`npm`からインストールするよ。今度もインストールが終わったらバージョン確認してね😊  
<details>
<summary>「Yarn」と「npm」って何が違うの❓</summary>
✔ 「Yarn」も「npm」もどっちも「node.js」の「パッケージマネージャ」と呼ばれるものなんだ。同じような機能を持ってるんだけど「Yarn」のが速かったりコマンドが簡単だったりするアドバンテージがあるよ🐴
</details>  

```console
> npm i -g yarn
> yarn --version
1.22.0
```

### 4. GITを使ってみよう🐶

ここまでで簡単な環境構築はできたから、それじゃあGITを使って今読んでるこのプロジェクトをみんなのパソコンにダウンロードしちゃおう😊

どこか適当なフォルダでコマンドプロンプトを開いてみよう（`[Shift] + 右クリック`して`コマンドウインドウをここで開く(S)`を選択してもいいよ）

下のコマンドをコマンドプロンプトに打ってみてね

```console
> git clone https://github.com/AlwaysRusting/tutorial-react-lesson.git
Cloning into 'tutorial-react-lesson'...
remote: Enumerating objects: 48, done.
remote: Counting objects: 100% (48/48), done.
remote: Compressing objects: 100% (40/40), done.
remote: Total 48 (delta 7), reused 46 (delta 5), pack-reused 0
Unpacking objects: 100% (48/48), 233.78 KiB | 110.00 KiB/s, done.
```

こんな感じで`done`ってなったら成功だよ。できたプロジェクトのフォルダに移動してみよう！

```console
> cd tutorial-react-lesson
```

### 5. Reactに触ってみよう🐰

おまたせ！ようやくお待ちかねのReactに触ってみよう！  
さっき作ったプロジェクトのフォルダで、またコマンドプロンプトのコマンドを打つよ。ふたつのコマンドを続けて打つからちょっと気を付けてね🐰🥦

```console
# コマンドプロンプト
tutorial-react-lesson> yarn && yarn start
```

```console
# PowerShell
tutorial-react-lesson> yarn; yarn start
```

このコマンドは、打った後が長いから今のうちに洗濯物でも干してこようね😊
