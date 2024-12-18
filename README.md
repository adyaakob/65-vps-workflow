# VPS Workflow Validation Project

## Purpose
Test and validate the deployment workflow from GitHub to Dokploy VPS.

## Deployment
- **URL**: https://dahalan.org/testworkflow/
- **Server**: Dokploy VPS
- **IP**: 167.235.75.153

## Workflow Steps
1. Push changes to GitHub
2. GitHub Actions triggers deployment
3. Files copied to VPS
4. Website goes live

## Verification
- Check GitHub Actions logs
- Verify website accessibility
- Confirm correct subdomain routing

# 🚀 VPS Workflow Validation Project

## 📋 Project Overview

This project demonstrates a complete continuous deployment workflow from GitHub to a Dokploy-powered VPS, showcasing automated web application deployment.

## 🌐 Deployment Details

- **Live URL**: https://dahalan.org/testworkflow/
- **Server**: Dokploy VPS
- **Server IP**: 167.235.75.153
- **Domain**: dahalan.org
- **Subdomain**: testworkflow

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: Dokploy VPS
- **CI/CD**: GitHub Actions
- **Deployment**: Automated SCP file transfer

## 🚢 Deployment Workflow

1. **Code Push**
   - Developer pushes changes to `main` branch on GitHub
   
2. **GitHub Actions**
   - Workflow automatically triggered
   - Checks out latest code
   - Sets up SSH credentials
   - Transfers files to VPS
   
3. **VPS Deployment**
   - Files copied to `/var/www/html/dahalan.org/testworkflow/`
   - Nginx serves the static files
   
4. **Verification**
   - Automated curl check confirms website accessibility

## 🛠 Local Development

### Prerequisites
- Git
- Web browser
- Text editor

### Setup
```bash
# Clone the repository
git clone https://github.com/adyaakob/65-vps-workflow.git

# Navigate to project directory
cd 65-vps-workflow

# Open index.html in your browser
```

## 🔍 Workflow Validation Checklist

- [x] GitHub repository setup
- [x] GitHub Actions configuration
- [x] VPS file transfer
- [x] Nginx subdomain routing
- [x] Live website accessibility

## 🚨 Troubleshooting

- Check GitHub Actions logs for deployment issues
- Verify SSH key and VPS credentials
- Confirm Nginx configuration
- Validate DNS routing

## 📝 Maintainer

**Andy Akob**
- GitHub: [@adyaakob](https://github.com/adyaakob)
- Email: andylie2004@gmail.com

## 📄 License

MIT License - Feel free to use and modify this project.

---

**Version**: 1.0.0
**Last Updated**: 2024-12-18
