
# Vercel Deployment Instructions

## Prerequisites
- A GitHub account
- A Vercel account
- Git installed on your local machine

## Step 1: Export from Horizons
Download or export your project files from the Horizons platform.

## Step 2: Initialize Git
Open your terminal, navigate to the project folder, and run:
`git init`

## Step 3: Create GitHub Repo
Create a new repository on GitHub. Link it to your local project:
`git remote add origin https://github.com/yourusername/your-repo-name.git`

## Step 4: Push Code
Commit and push your code:
`git add .`
`git commit -m "Initial commit"`
`git push -u origin main`

## Step 5: Deploy to Vercel
1. Log in to Vercel and click "Add New" > "Project".
2. Import your newly created GitHub repository.
3. Vercel will automatically detect Vite as the framework.

## Step 6: Add Environment Variables
In the Vercel deployment settings, expand "Environment Variables" and add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Step 7: Deploy
Click "Deploy". Vercel will build and host your site.

## Step 8: Point Domain (Optional)
Once deployed, go to the project settings in Vercel under "Domains" to add a custom domain.

## Verification Checklist
- [ ] React Router navigation works (refreshes don't 404)
- [ ] Environment variables are properly loaded
- [ ] Build completes without errors
