# Lakhyajit Changmai Portfolio

A modern, interactive 3D portfolio website built with React and Three.js. This portfolio showcases my work and skills through an immersive 3D experience.

![3D Portfolio](https://i.ibb.co/ryytGVx/Screenshot-2023-11-25-at-11-28-11-AM.png)

## Features

- **Interactive 3D Environment**: Built with Three.js and React Three Fiber
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Clean and professional interface with Tailwind CSS
- **Contact Form**: Integrated EmailJS for seamless communication
- **Smooth Animations**: Engaging transitions and 3D animations
- **Audio Integration**: Background music with toggle controls

## Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Email Service**: EmailJS
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lakhyajit-changmai-portfolio.git
   cd lakhyajit-changmai-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   ```
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## EmailJS Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add these values to your `.env` file

## Customization

- Update personal information in `src/constants/index.js`
- Replace 3D models in `src/assets/3d/`
- Modify styling in `src/index.css` and component files
- Update project data in the constants file

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Lakhyajit Changmai**
- Email: lakhyajit@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ by Lakhyajit Changmai