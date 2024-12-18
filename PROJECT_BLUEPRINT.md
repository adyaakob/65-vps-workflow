# 🚀 VPS Workflow Validation Project

## 📋 Project Overview
A simple HTML project designed to test and validate the deployment workflow from GitHub to Dokploy VPS, ensuring smooth continuous integration and delivery.

### 🎯 Project Objectives
- Validate GitHub to Dokploy deployment pipeline
- Test VPS hosting configuration
- Verify subdomain routing
- Demonstrate basic web hosting workflow

## 🔧 Technology Stack
- **Frontend**: Pure HTML5, CSS3
- **Hosting**: Dokploy VPS
- **Domain**: dahalan.org/testworkflow/
- **CI/CD**: GitHub Actions

## 🚀 Deployment Target
- **URL**: https://dahalan.org/testworkflow/index.html
- **Server**: Dokploy-powered VPS
- **IP**: 167.235.75.153

## 📦 Project Structure
```
65-vps-workflow/
│
├── src/
│   └── index.html        # Main HTML file
│   └── styles.css        # Styling
│   └── script.js         # Optional JavaScript
│
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
│
└── README.md             # Project documentation
```

## 🚢 Deployment Workflow
1. Push changes to GitHub
2. GitHub Actions triggers deployment
3. Dokploy pulls and deploys to VPS
4. Verify live at dahalan.org/testworkflow/

## 🔐 Nginx Configuration Snippet
```nginx
location /testworkflow/ {
    alias /var/www/html/testworkflow/;
    index index.html;
}
```

## 🧪 Validation Checklist
- [ ] GitHub repository push
- [ ] Successful GitHub Actions workflow
- [ ] Dokploy deployment
- [ ] Live website accessibility
- [ ] Correct subdomain routing

## 🔒 Security Considerations
- Minimal attack surface
- Static HTML content
- No server-side processing

## 🚧 Troubleshooting
- Check GitHub Actions logs
- Verify Dokploy deployment status
- Inspect Nginx configuration
- Validate DNS routing

## 📝 Deployment Notes
Ensure Dokploy and Nginx are configured to serve the `/testworkflow/` subdirectory.

## 🤝 Contact Information

**Author**: Andy Akob
- **GitHub**: [https://github.com/adyaakob](https://github.com/adyaakob)
- **Email**: andylie2004@gmail.com

---

**Version**: 0.1.0
**Last Updated**: 2024-12-18
