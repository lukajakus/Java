@echo off
setlocal
cd /d "%~dp0"
title Java Learning Lab
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nije instaliran. Instaliraj Node.js 20 ili noviji s https://nodejs.org/
  pause
  exit /b 1
)
echo.
echo Java Learning Lab pokrece se na http://127.0.0.1:4173
start "" "http://127.0.0.1:4173"
node backend\server.mjs
echo.
echo Server je zavrsio rad.
pause
