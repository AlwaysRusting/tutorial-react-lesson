@if(0)==(0) echo Off

rem �ݒ���R�s�[
copy /Y .\settings.json %APPDATA%\Code\User\settings.json

rem �g���p�b�P�[�W���C���X�g�[��
for /f %%n in (extensions.txt) do (
    code --install-extension %%n
)

pause
