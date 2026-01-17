# Deploying to Vercel

There are two easy ways to deploy your website to Vercel.

## Option 1: Via GitHub (Recommended)

This method effectively gives you "Continuous Deployment" - every time you push code changes to GitHub, Vercel will automatically obtain the changes and update your live site.

1.  **Push your code to GitHub**
    *   Create a new repository on [GitHub](https://github.com/new).
    *   Run the following commands in your terminal (if you haven't already linked your repo):
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git push -u origin main
        ```

2.  **Import to Vercel**
    *   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    *   Click **"Add New..."** -> **"Project"**.
    *   Find your GitHub repository in the list and click **"Import"**.

3.  **Configure**
    *   **Framework Preset**: Select `Vite`.
    *   **Root Directory**: Ensure this is the folder containing your `package.json` (Game Website Main).
    *   Click **"Deploy"**.

## Option 2: Via Command Line (Vercel CLI)

If you don't want to use GitHub, you can deploy directly from your computer.

1.  **Install Vercel CLI**
    ```bash
    npm i -g vercel
    ```

2.  **Deploy**
    Run the following command in your project folder:
    ```bash
    vercel
    ```
    *   Log in if prompted.
    *   Answer `Y` to "Set up and deploy?".
    *   Accept default settings (just press Enter) for most questions.

## Important Note regarding Routing

I have added a `vercel.json` file to your project. This is **critical** for your multi-page website (Routing). It tells Vercel to redirect all page requests (like `/about`, `/contact`) to your main `index.html`, allowing React to handle the page display correctly. Without this, refreshing a sub-page would result in a 404 error.
