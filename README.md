# Portfolio Website

A modern, responsive portfolio website built with React, featuring a minimalist design with dark/light theme support, animated transitions, and dynamic content integration.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.0.3-DB7093?logo=styled-components)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.5-764ABC?logo=redux)

## ✨ Features

- **🎨 Modern UI/UX**: Clean, minimalist design with smooth animations and transitions
- **🌓 Theme Toggle**: Dark and light mode support with persistent theme preference
- **📱 Fully Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- **🎬 Video Background**: Engaging video background on the homepage
- **📊 Dynamic Content**: 
  - GitHub repository integration
  - Real-time project showcase
  - Skills and experience display
- **⚡ Performance Optimized**: 
  - Code splitting with React.lazy()
  - Optimized bundle size
  - Fast loading times
- **🎯 Multi-Page Navigation**: 
  - Home
  - About
  - Resume (Education & Experience)
  - Projects
  - Blog
  - Contact Form

## 🚀 Tech Stack

### Core Technologies
- **React 18.2.0** - UI library
- **React Router DOM 6** - Client-side routing
- **Redux Toolkit** - State management
- **Styled Components** - CSS-in-JS styling

### Key Libraries
- **React Animation on Scroll** - Scroll-triggered animations
- **React Typewriter Effect** - Typing animation for hero section
- **Axios** - HTTP client for API requests
- **Font Awesome** - Icon library
- **React Icons** - Additional icon set

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 24.x or higher
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HassanSj/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages (requires predeploy build)

## 🌐 Deployment

### Vercel Deployment

This project is configured for Vercel deployment with Node.js 24.x.

1. **Push your code to GitHub**
2. **Import your repository to Vercel**
3. **Vercel will automatically detect the configuration** from `vercel.json`
4. **Deploy!** - Your site will be live automatically

The `vercel.json` file includes:
- Node.js version: 24.x
- Build command: `npm run build`
- Framework: Create React App

### Manual Deployment

For other platforms, build the production bundle:

```bash
npm run build
```

The `build` folder contains the optimized production build ready for deployment.

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static assets
│   ├── assets/            # Images, videos, CV files
│   └── index.html         # HTML template
├── src/
│   ├── app/               # Redux store configuration
│   ├── components/        # Reusable React components
│   │   ├── about/         # About page components
│   │   ├── contact/       # Contact page components
│   │   ├── home/          # Homepage components
│   │   ├── projects/      # Projects page components
│   │   ├── resume/        # Resume page components
│   │   ├── service/       # Services components
│   │   └── skills/        # Skills components
│   ├── features/          # Redux slices
│   │   ├── repos/         # GitHub repos state management
│   │   └── theme/         # Theme state management
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── theme/             # Theme configuration
│   └── App.js             # Main app component
├── vercel.json            # Vercel deployment configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Theme Configuration
Edit theme colors and styles in `src/theme/theme.js`:
- Light theme colors
- Dark theme colors
- Typography settings
- Spacing and layout

### Content Updates
- **Personal Information**: Update components in `src/components/home/`
- **About Section**: Modify `src/components/about/`
- **Projects**: Update `src/features/repos/reposSlice.js` with your GitHub username
- **Resume**: Edit `src/components/resume/` components

### GitHub Integration
To fetch your repositories, update the GitHub API URL in `src/features/repos/reposSlice.js`:
```javascript
const REPO_URL = "https://api.github.com/users/YOUR_USERNAME/repos";
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for environment-specific variables (if needed):
```
REACT_APP_API_URL=your_api_url
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Hassan Sajjad**
- Freelancer
- Web Developer
- Web Designer
- DevOps Engineer

## 🙏 Acknowledgments

- React community for excellent documentation
- All open-source library contributors
- Design inspiration from modern portfolio websites

---

⭐ If you like this project, please give it a star on GitHub!
