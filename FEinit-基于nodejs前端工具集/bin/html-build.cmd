@echo off
SETLOCAL ENABLEEXTENSIONS
 
REM �����ļ���׺��ֻbuild html�ļ�
if "%~x1" NEQ ".html" (
    if "%~x1" NEQ ".htm" (
        echo.
        echo **** ��ѡ��html�ļ�
        echo.
        goto End
    )
)
 

   
"node.exe" "%~dp0fe" build "%~n1%~x1"   
goto End 
 
 
:End
ENDLOCAL
pause