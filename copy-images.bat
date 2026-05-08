@echo off
setlocal enabledelayedexpansion

set sourceDir=C:\Users\Ankit\OneDrive\Desktop\Web3
set destDir=c:\Users\Ankit\OneDrive\Desktop\Web3\codrops-depth-gallery\src\assets

for /L %%i in (1,1,5) do (
    copy "!sourceDir!\%%i.jpeg" "!destDir!\%%i.jpeg"
    echo Copied %%i.jpeg
)

echo.
echo Assets folder contents:
dir "!destDir!"
