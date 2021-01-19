@if(0)==(0) echo Off

rem 設定をコピー
copy /Y .\settings.json %APPDATA%\Code\User\settings.json

rem 拡張パッケージをインストール
for /f %%n in (extensions.txt) do (
    code --install-extension %%n
)

pause
