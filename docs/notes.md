# Notes

## なんでもメモ

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

### ESLint/Prettierのインストール

```console
> yarn add -D prettier eslint eslint-config-prettier eslint-plugin-prettier
```

[https://qiita.com/jonakp/items/7d9f47c613c16cbf95aa](!https://qiita.com/jonakp/items/7d9f47c613c16cbf95aa)

```console
> yarn add -D eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import
```
