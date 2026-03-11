# Render Deployment Guide

This project is configured for deployment on Render using the `render.yaml` configuration file.

## Deployment Steps

1. **Connect Your Repository**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" and select "Static Site"
   - Connect your GitHub repository: `https://github.com/BeUp-In-Tech/tenant-system`

2. **Configuration**
   - **Name**: tenant-evaluation-system (auto-populated)
   - **Branch**: main
   - **Root Directory**: ./Tenant_integrity
   - **Build Command**: `npm run build`
   - **Publish Directory**: `./dist`
   - **Node Version**: 18 (auto-configured)

3. **Environment Variables**
   - No environment variables required for this static React app

4. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your application

## Automatic Configuration

The `render.yaml` file in the project root automatically configures:
- Static site deployment
- Build command and publish directory
- SPA routing (rewrites all routes to index.html)
- Node.js version 18
- Build filters for efficient rebuilds

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
Tenant_integrity/
├── src/                 # React source code
├── public/              # Static assets
├── dist/                # Build output (generated)
├── render.yaml          # Render configuration
├── package.json         # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── index.html           # Entry HTML file
```

## Deployment URL

Once deployed, your app will be available at:
`https://tenant-evaluation-system.onrender.com`

## Troubleshooting

- **Build Failures**: Check the build logs in Render dashboard
- **Routing Issues**: The render.yaml includes SPA routing configuration
- **Missing Assets**: Ensure all static files are in the `public/` directory

## Support

For Render-specific issues, refer to [Render Documentation](https://render.com/docs).
