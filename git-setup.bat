@echo off
echo Setting up StockTracker Pro Git Repository...
echo.

REM Initialize Git repository
git init

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial commit: StockTracker Pro - Inventory Management System"

echo.
echo Repository initialized successfully!
echo.
echo Next steps:
echo 1. Create a new repository on GitHub (suggested name: stocktracker-pro)
echo 2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo 3. Run: git branch -M main
echo 4. Run: git push -u origin main
echo.
pause
