import { useState } from 'react';

const CodeSnippets = () => {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSnippetChange = (index) => {
    setActiveSnippet(index);
    setCopied(false); // Reset copied state when switching snippets
  };

  const codeSnippets = [
    {
      title: 'AI Resume Analyzer - API Integration',
      description: 'Clean API integration with error handling and loading states',
      language: 'javascript',
      code: `// AI-powered resume analysis with proper error handling
const analyzeResume = async (resumeText) => {
  try {
    setLoading(true);
    setError(null);
    
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${process.env.OPENAI_API_KEY}\`
      },
      body: JSON.stringify({ 
        text: resumeText,
        options: {
          includeATS: true,
          generateSuggestions: true
        }
      })
    });
    
    if (!response.ok) {
      throw new Error(\`Analysis failed: \${response.statusText}\`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Resume analysis error:', error);
    setError(error.message);
    throw error;
  } finally {
    setLoading(false);
  }
};`,
      features: ['Error Handling', 'Loading States', 'Type Safety', 'API Security']
    },
    {
      title: 'Interactive 3D Plane Component',
      description: 'Three.js component with hover effects and animations',
      language: 'javascript',
      code: `// Interactive 3D plane with hover effects
import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function InteractivePlane({ isRotating, ...props }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  const handleClick = () => {
    if (actions["Take 001"]) {
      actions["Take 001"].reset().play();
    }
  };

  return (
    <mesh 
      {...props} 
      ref={ref}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
      {hovered && (
        <mesh>
          <sphereGeometry args={[2, 16, 16]} />
          <meshBasicMaterial 
            color="#00c6ff" 
            transparent 
            opacity={0.1} 
            wireframe 
          />
        </mesh>
      )}
    </mesh>
  );
}`,
      features: ['3D Graphics', 'Hover Effects', 'Animations', 'Event Handling']
    },
    {
      title: 'Theme Context with Dark Mode',
      description: 'React context for managing theme state across the app',
      language: 'javascript',
      code: `// Theme context with localStorage persistence
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`,
      features: ['Context API', 'Local Storage', 'System Preference', 'Persistence']
    }
  ];

  const currentSnippet = codeSnippets[activeSnippet];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Code{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Snippets
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Showcasing clean, efficient code from my projects.
      </p>

      {/* Snippet Navigation */}
      <div className='flex flex-wrap gap-3 mt-8 mb-8'>
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => handleSnippetChange(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeSnippet === index
                ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-lg'
                : 'bg-white dark:bg-black text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-900 border border-slate-200 dark:border-slate-600'
            }`}
          >
            {snippet.title}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className='bg-white dark:bg-black rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600 overflow-hidden'>
        {/* Header */}
        <div className='bg-slate-50 dark:bg-black px-6 py-4 border-b border-slate-200 dark:border-slate-600'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
            {currentSnippet.title}
          </h3>
          <p className='text-slate-600 dark:text-slate-400 text-sm'>
            {currentSnippet.description}
          </p>
        </div>

        {/* Code Block */}
        <div className='relative'>
          <div className='bg-black dark:bg-white text-white dark:text-black p-6 overflow-x-auto'>
            <pre className='text-sm leading-relaxed'>
              <code className='language-javascript'>{currentSnippet.code}</code>
            </pre>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`absolute top-4 right-4 px-3 py-1 text-xs rounded transition-all duration-200 flex items-center gap-1 ${
              copied 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Copied
              </>
            ) : (
              'Copy'
            )}
          </button>
        </div>

        {/* Features */}
        <div className='px-6 py-4 bg-slate-50 dark:bg-black'>
          <h4 className='text-sm font-semibold text-slate-900 dark:text-white mb-3'>
            Key Features:
          </h4>
          <div className='flex flex-wrap gap-2'>
            {currentSnippet.features.map((feature, index) => (
              <span
                key={index}
                className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full'
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;
