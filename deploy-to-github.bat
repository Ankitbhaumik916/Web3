@echo off
REM Deploy project to GitHub

cd /d "C:\Users\Ankit\OneDrive\Desktop\Web3\codrops-depth-gallery"

echo.
echo =================================
echo Deploying to GitHub
echo =================================
echo.

REM Configure Git
echo Setting up Git configuration...
git config --global user.email "you@example.com"
git config --global user.name "Samarth Agarwal"

REM Add all files
echo.
echo Adding files to staging...
git add .

REM Commit changes
echo.
echo Committing changes...
git commit -m "Customized portfolio for Samarth Agarwal - contemporary artist

Features:
- Landing page with artist name and CTA button
- About section with artist biography
- Interactive 3D gallery with 5 artwork displays
- Contact section with email and Instagram links
- Instagram QR code integration
- Smooth scroll navigation between sections
- Fully responsive design for all devices
- Production-ready build configuration

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

REM Set remote URL
echo.
echo Setting remote URL...
git remote set-url origin https://github.com/Ankitbhaumik916/Web3.git

REM Set main branch
echo.
echo Setting main branch...
git branch -M main

REM Push to GitHub
echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo =================================
echo ✓ Deployment complete!
echo =================================
echo.
echo Your project is now on GitHub at:
echo https://github.com/Ankitbhaumik916/Web3
echo.
pause
