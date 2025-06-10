# AI Studio - Text & Image Generation Platform

A modern, full-featured web application that provides AI-powered text and image generation capabilities using the Pollinations AI API. Built with React and featuring a beautiful, production-ready interface with persistent state management.



## Features

### 🖼️ AI Image Generation
- **Multi-Image Generation**: Generate 9 high-quality images simultaneously from a single prompt
- **Advanced Model Selection**: Choose from multiple AI models
- **Customizable Dimensions**: Set custom width and height or use preset aspect ratios
- **Aspect Ratio Presets**: Quick selection for common ratios (1:1, 16:9, 4:3, 9:16)
- **One-Click Download**: Download images with descriptive filenames
- **Persistent Gallery**: Generated images remain available across page navigation

### 📝 AI Text Generation
- **Versatile Text Creation**: Generate code, stories, articles, and more
- **Multiple AI Models**: Support for OpenAI, Mistral, Grok, Evil, and OpenAI-Fast
- **Copy & Download**: Easy text copying functionality
- **Clean Interface**: Simplified UI focusing on prompt input and model selection

### 💾 State Management & Persistence
- **React Context API**: Robust state management preventing data loss
- **Cross-Page Persistence**: Navigate between pages without losing generated content
- **Downloaded Images Tracking**: Dedicated page to view all downloaded images
- **Session Continuity**: Generated content persists throughout the user session

### 🎨 Premium Design
- **Responsive Design**: Optimized for all screen sizes and devices
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Dark Theme**: Beautiful gradient backgrounds with glass-morphism effects
- **Toast Notifications**: Real-time feedback for user actions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful, customizable icons

### State Management
- **React Context API** - Global state management for persistence
- **React Hooks** - useState, useEffect, useContext for local state

### External APIs
- **Pollinations AI** - Image and text generation services
  - Image API: `https://image.pollinations.ai`
  - Text API: `https://text.pollinations.ai`

### Additional Libraries
- **React Toastify** - Toast notifications for user feedback
- **Custom Utilities** - Image download, seed generation, and API helpers

### Environment Variables
No environment variables required - the application uses public APIs.


## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

