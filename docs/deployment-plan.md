# Deployment Plan – Tutorio

## Deployment Strategy
We will use a simple cloud deployment using a platform such as Render / Vercel / Railway.

- Frontend: Deployed via Vercel
- Backend: Deployed via Render
- Database: Cloud-hosted (MongoDB Atlas / Firebase)

## Steps to Deploy
1. Push code to GitHub repository
2. Connect repository to deployment platform
3. Configure environment variables
4. Build and deploy application
5. Access live URL

## Rollback Plan
- Revert to previous Git commit
- Redeploy last stable version
- Disable faulty feature if needed

## Risks
- Deployment failure → retry build
- Environment variable errors → reconfigure
