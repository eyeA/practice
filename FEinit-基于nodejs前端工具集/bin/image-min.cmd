@echo off
SETLOCAL ENABLEEXTENSIONS
 
if "%~x1" NEQ ".jpg" (
    if "%~x1" NEQ ".gif" (
        if "%~x1" NEQ ".png" (
            echo.
            echo **** ��ѡ��ͼƬ�ļ�
            echo.
            goto End
        )
    )
)
 

   
"node.exe" "%~dp0fe" imagemin "%~n1%~x1"   
goto End 
 
 
:End
ENDLOCAL
pause