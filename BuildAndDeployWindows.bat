@echo off
setlocal enabledelayedexpansion

echo Building latest project files...
call npm run build


if %errorlevel% neq 0 (
    echo Build failed. Please check the error logs.
    pause
    exit /b %errorlevel%
)

echo Copying files from ./build to ./public...

:: Ensure the destination directory exists
if not exist ".\public" mkdir ".\public"

:: Copy files from build to public, overwriting existing files
xcopy ".\build\*" ".\public\" /E /Y /Q

if %errorlevel% neq 0 (
    echo Error occurred during file copy. Exiting.
    pause
    exit /b %errorlevel%
)

echo Files copied successfully.

echo Handing off to ^"firebase deploy^"...
firebase deploy
