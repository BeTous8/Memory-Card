# CV Application

A modern, responsive CV builder built with React that allows users to create and edit professional resumes with a clean, intuitive interface.

## 🚀 Live Demo

[**View Live Application**](https://ben-cv-builder.netlify.app)

## ✨ Features

- **Global Edit/Display Mode** - Edit entire CV at once or view final formatted version
- **Three Main Sections:**
  - General Information (Name, Email, Phone)
  - Educational Experience (School, Study Title, Date)
  - Practical Experience (Company, Position, Responsibilities, Date Range)
- **Individual Section Reset** - Clear individual sections while preserving others
- **Real-time Form Validation** - Controlled components with immediate feedback
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Professional Styling** - Clean, modern interface with smooth transitions
- **Accessibility Features** - Proper labels, focus states, and semantic HTML

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Custom styling with modern design principles
- **JavaScript ES6+** - Modern JavaScript features
- **Netlify** - Deployment and hosting

## 🏗️ Technical Architecture

### State Management
- **Lifted State Pattern** - All CV data managed at App component level
- **Controlled Components** - Form inputs controlled by React state
- **Props-based Communication** - Parent-child data flow via props and callbacks

### Component Structure
```
App
├── GeneralInfo
├── EducationalExperience
├── PracticalExperience
└── Global Controls
```

### Key Patterns Implemented
- Controlled form inputs with real-time updates
- Conditional rendering for edit/display modes
- Event handling and data validation
- Responsive CSS with mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BeTous8/CV-Application.git
   cd CV-Application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 💡 Usage

1. **Edit Mode**: Fill in your information across all three sections
2. **Review**: Switch to display mode to see your formatted CV
3. **Refine**: Return to edit mode to make adjustments
4. **Reset**: Use individual reset buttons to clear specific sections

## 🎨 Design Decisions

### UX Improvements
- **Global edit mode** instead of individual section editing for better user flow
- **Date ranges** for work experience with separate from/to inputs
- **Textarea for responsibilities** to allow detailed descriptions
- **Visual feedback** with hover states and focus indicators

### Technical Choices
- **Lifted state architecture** for centralized data management
- **Single CSS file** for simplified styling management
- **Modern ES6+ syntax** with hooks and functional components
- **Responsive-first design** with mobile considerations

## 📱 Responsive Design

- **Mobile**: Single column layout with optimized spacing
- **Tablet**: Maintains readability with adjusted padding
- **Desktop**: Full layout with maximum width constraints

## 🔧 Development Features

- **Hot reload** during development
- **Error boundaries** for graceful error handling
- **Console logging** for debugging (disabled in production)
- **Modern build optimization** with Vite

## 📈 Future Enhancements

Potential features for future development:
- **Multiple CV templates** with different styling options
- **PDF export** functionality
- **AI-powered content suggestions** based on job descriptions
- **Multi-language support**
- **Cloud storage** for saving multiple CV versions
- **Print optimization** for physical resume printing

## 🧪 Testing

The application has been tested across:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile devices (iOS and Android)
- ✅ Different screen sizes and orientations
- ✅ Keyboard navigation and accessibility

## 📝 Learning Objectives Achieved

This project demonstrates proficiency in:
- **React fundamentals** (components, state, props, hooks)
- **Modern JavaScript** (ES6+, destructuring, template literals)
- **State management patterns** (lifting state up, controlled components)
- **CSS styling** (responsive design, modern layouts, animations)
- **Development workflow** (Git, deployment, project organization)
- **User experience design** (intuitive interfaces, accessibility)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**BeTous8**
- GitHub: [@BeTous8](https://github.com/BeTous8)
- Project: [CV Application](https://github.com/BeTous8/CV-Application)
- Live Demo: [ben-cv-builder.netlify.app](https://ben-cv-builder.netlify.app)

---

*Built as part of The Odin Project curriculum to demonstrate React development skills and modern web development practices.*