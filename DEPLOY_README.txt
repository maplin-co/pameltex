DEPLOYMENT TO HOSTINGER (REACT + VITE)

Your project is now a full React Application using Vite.

DEPLOYMENT STEPS:

OPTION 1: GIT DEPLOYMENT (Recommended)
1. Push this code to GitHub/GitLab.
2. Connect your repo in Hostinger Dashboard.
3. Use these settings:
   - Build Command: npm run build
   - Publish Directory: dist/
4. Hostinger will automatically install dependencies, build the app, and serve the "dist" folder.

OPTION 2: MANUAL BUILD & UPLOAD
1. Run "npm install" on your computer.
2. Run "npm run build".
3. A "dist" folder will be created.
4. Upload everything INSIDE the "dist" folder to "public_html" on Hostinger.
5. ALSO Upload "send_mail.php" to "public_html" (It must sit alongside the built files).
6. ALSO Upload ".htaccess" to "public_html".

IMPORTANT NOTES:
- The "send_mail.php" file is NOT part of the React build. It is a backend script. It must be manually uploaded to the server root if you use Option 2, or ensuring it's in the "public" folder if using Option 1.
- I have placed "send_mail.php" in the root. For React builds, static assets should go in the "public" folder to be copied to "dist" automatically.
- I WILL MOVE send_mail.php TO THE PUBLIC FOLDER NOW FOR YOU.
