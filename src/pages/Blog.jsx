import { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import BlogArticle from '../components/BlogArticle';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'design', name: 'Design & UX' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building AI-Powered Applications: A Complete Guide',
      excerpt: 'Learn how to integrate AI capabilities into your web applications, from voice agents to intelligent analysis tools.',
      category: 'ai',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['AI', 'Machine Learning', 'Web Development'],
      featured: true,
      image: '/src/assets/images/hero.jpg',
      fullContent: (
        <div>
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            In today's rapidly evolving digital landscape, artificial intelligence has become a cornerstone of modern web development. 
            As a developer who has built several AI-powered applications including Resumetricts, Converso, and Questly, I've learned 
            valuable lessons about integrating AI capabilities into web applications effectively.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Understanding AI Integration Patterns
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            The first step in building AI-powered applications is understanding the different integration patterns available. 
            From REST APIs to WebSocket connections, each approach has its strengths and use cases.
          </p>

          <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-6'>
            1. API-Based Integration
          </h3>
          
          <p className='mb-4 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Most AI services provide REST APIs that are easy to integrate. For Resumetricts, I used OpenAI's API for 
            resume analysis and ATS optimization. The key is to handle rate limiting, error states, and provide 
            meaningful feedback to users.
          </p>

          <div className='bg-slate-100 dark:bg-gray-800 rounded-lg p-4 mb-6'>
            <pre className='text-sm text-slate-700 dark:text-slate-300'>
{`// Example API integration
const analyzeResume = async (resumeText) => {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: resumeText })
    });
    return await response.json();
  } catch (error) {
    console.error('Analysis failed:', error);
  }
};`}
            </pre>
          </div>

          <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-6'>
            2. Real-Time Voice Processing
          </h3>
          
          <p className='mb-4 text-slate-600 dark:text-slate-400 leading-relaxed'>
            For Converso, I implemented real-time voice processing using WebRTC and WebSocket connections. 
            This allows for natural conversation flow and immediate responses from AI voice agents.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Best Practices for AI Applications
          </h2>

          <ul className='list-disc list-inside mb-6 text-slate-600 dark:text-slate-400 space-y-2'>
            <li>Always provide loading states and progress indicators</li>
            <li>Implement proper error handling and fallback mechanisms</li>
            <li>Use streaming responses for better user experience</li>
            <li>Cache results when appropriate to reduce API calls</li>
            <li>Implement rate limiting on the client side</li>
          </ul>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Performance Optimization
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            AI applications can be resource-intensive. Implementing proper optimization techniques ensures 
            smooth user experiences even with complex AI operations running in the background.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Conclusion
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Building AI-powered applications requires careful consideration of user experience, performance, 
            and integration patterns. By following these guidelines and learning from real-world implementations, 
            you can create powerful, user-friendly AI applications that provide genuine value to your users.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: 'Mastering Three.js: Creating Interactive 3D Web Experiences',
      excerpt: 'Discover the power of Three.js and learn how to create stunning 3D interactive experiences for the web.',
      category: 'web-dev',
      date: '2025-01-10',
      readTime: '12 min read',
      tags: ['Three.js', '3D Graphics', 'WebGL'],
      featured: false,
      image: '/src/assets/images/hero.jpg',
      fullContent: (
        <div>
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Three.js has revolutionized web development by bringing 3D graphics capabilities directly to the browser. 
            As someone who has implemented interactive 3D elements in this portfolio, I can attest to the power 
            and flexibility that Three.js provides for creating immersive web experiences.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Getting Started with Three.js
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Three.js is a JavaScript library that makes WebGL accessible to web developers. It provides a 
            high-level API for creating 3D scenes, animations, and interactive elements without diving deep 
            into WebGL's complexity.
          </p>

          <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-6'>
            Core Concepts
          </h3>
          
          <ul className='list-disc list-inside mb-6 text-slate-600 dark:text-slate-400 space-y-2'>
            <li><strong>Scene:</strong> The 3D world container</li>
            <li><strong>Camera:</strong> Defines the viewpoint</li>
            <li><strong>Renderer:</strong> Draws the scene to the screen</li>
            <li><strong>Mesh:</strong> 3D objects with geometry and material</li>
            <li><strong>Lighting:</strong> Illuminates the scene</li>
          </ul>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Interactive Elements Implementation
          </h2>
          
          <p className='mb-4 text-slate-600 dark:text-slate-400 leading-relaxed'>
            In this portfolio, I've implemented interactive 3D elements including clickable planes and birds 
            with hover effects. Here's how I achieved this:
          </p>

          <div className='bg-slate-100 dark:bg-gray-800 rounded-lg p-4 mb-6'>
            <pre className='text-sm text-slate-700 dark:text-slate-300'>
{`// Interactive 3D element with hover effects
const InteractivePlane = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <mesh
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
};`}
            </pre>
          </div>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Performance Optimization
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Three.js applications can be performance-intensive. Here are key optimization strategies:
          </p>

          <ul className='list-disc list-inside mb-6 text-slate-600 dark:text-slate-400 space-y-2'>
            <li>Use instanced rendering for repeated objects</li>
            <li>Implement level-of-detail (LOD) for complex models</li>
            <li>Optimize textures and materials</li>
            <li>Use frustum culling to avoid rendering off-screen objects</li>
            <li>Implement proper cleanup to prevent memory leaks</li>
          </ul>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Advanced Techniques
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Advanced Three.js techniques include post-processing effects, custom shaders, 
            and physics integration. These can elevate your 3D web experiences to the next level.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      category: 'web-dev',
      date: '2025-01-05',
      readTime: '6 min read',
      tags: ['Trends', 'Future', 'Technology'],
      featured: false,
      image: '/src/assets/images/hero.jpg',
      fullContent: (
        <div>
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            As we navigate through 2025, the web development landscape continues to evolve at an unprecedented pace. 
            From AI integration to advanced 3D graphics, several exciting trends are reshaping how we build and 
            experience web applications.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            AI-First Development
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Artificial Intelligence is no longer a futuristic concept but a practical tool for modern web development. 
            From automated code generation to intelligent user interfaces, AI is becoming integral to the development process.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Enhanced 3D Experiences
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            WebGL and Three.js are enabling rich 3D experiences directly in the browser. 
            Interactive 3D elements, virtual reality integration, and immersive user interfaces 
            are becoming standard features in modern web applications.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Performance-First Approach
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            With Core Web Vitals becoming crucial ranking factors, performance optimization 
            is more important than ever. Developers are focusing on faster load times, 
            better user experiences, and efficient resource utilization.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: 'Designing for Accessibility: Creating Inclusive User Experiences',
      excerpt: 'Learn how to create web experiences that are accessible to all users, regardless of their abilities.',
      category: 'design',
      date: '2025-01-01',
      readTime: '10 min read',
      tags: ['Accessibility', 'UX Design', 'Inclusive Design'],
      featured: true,
      image: '/src/assets/images/hero.jpg',
      fullContent: (
        <div>
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Accessibility isn't just a nice-to-have feature—it's a fundamental requirement for creating 
            inclusive web experiences. As developers, we have a responsibility to ensure our applications 
            are usable by everyone, regardless of their abilities or circumstances.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Understanding Web Accessibility
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Web accessibility means designing and developing websites and applications that can be used 
            by people with disabilities. This includes visual, auditory, physical, speech, cognitive, 
            and neurological disabilities.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            WCAG Guidelines
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible content. 
            Following these guidelines ensures your applications meet international accessibility standards.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Implementation Strategies
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Implementing accessibility features requires careful consideration of user needs, 
            technical constraints, and design requirements. Here are key strategies for success.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Essential patterns and practices for building maintainable and scalable React applications.',
      category: 'tutorials',
      date: '2023-12-28',
      readTime: '15 min read',
      tags: ['React', 'Best Practices', 'Scalability'],
      featured: false,
      image: '/src/assets/images/hero.jpg',
      fullContent: (
        <div>
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            As React applications grow in complexity, maintaining code quality and performance becomes increasingly challenging. 
            Through building applications like Resumetricts and Converso, I've learned valuable patterns and practices 
            for creating scalable React applications.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Component Architecture
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Proper component architecture is the foundation of scalable React applications. 
            Understanding when to create new components and how to structure them is crucial for maintainability.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            State Management
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Effective state management is essential for complex applications. 
            Choosing the right state management solution and implementing it properly can make or break your application's scalability.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Performance Optimization
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            React provides several tools for optimizing performance, including memoization, 
            lazy loading, and code splitting. Understanding these techniques is crucial for building fast applications.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: 'The Art of Code Review: Improving Team Collaboration',
      excerpt: 'How effective code reviews can improve code quality and team collaboration.',
      category: 'web-dev',
      date: '2023-12-25',
      readTime: '7 min read',
      tags: ['Code Review', 'Teamwork', 'Best Practices'],
      featured: false,
      image: '/src/assets/images/hero.jpg',
      fullContent: (
        <div>
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Code reviews are more than just finding bugs—they're opportunities for knowledge sharing, 
            team collaboration, and continuous improvement. Effective code review processes can significantly 
            enhance both code quality and team dynamics.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Benefits of Code Reviews
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Code reviews provide numerous benefits beyond bug detection, including knowledge transfer, 
            consistency enforcement, and team learning opportunities.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Best Practices
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Implementing effective code review practices requires careful consideration of process, 
            tools, and team dynamics. Here are proven strategies for success.
          </p>

          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8'>
            Common Pitfalls
          </h2>
          
          <p className='mb-6 text-slate-600 dark:text-slate-400 leading-relaxed'>
            Avoiding common code review pitfalls is essential for maintaining a positive team culture 
            and ensuring effective collaboration.
          </p>
        </div>
      )
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  // If an article is selected, show the full article
  if (selectedArticle) {
    return (
      <BlogArticle 
        article={selectedArticle} 
        onBack={() => setSelectedArticle(null)}
        allArticles={blogPosts}
        onNavigateToArticle={(articleTitle) => {
          // Find the article by title and navigate to it
          const relatedArticle = blogPosts.find(post => post.title === articleTitle);
          if (relatedArticle) {
            setSelectedArticle(relatedArticle);
            // Scroll to top for better UX
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            console.log('Article not found:', articleTitle);
            console.log('Available articles:', blogPosts.map(p => p.title));
          }
        }}
      />
    );
  }

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Blog
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Thoughts on web development, AI, design, and the future of technology.
      </p>

      {/* Featured Posts */}
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
          Featured Articles
        </h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className='bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group'
            >
              <div className='flex items-center gap-2 mb-3'>
                <span className='px-2 py-1 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-xs rounded-full'>
                  Featured
                </span>
                <span className='text-slate-500 dark:text-slate-400 text-sm'>
                  {post.readTime}
                </span>
              </div>
              
              <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
                {post.title}
              </h3>
              
              <p className='text-slate-600 dark:text-slate-400 mb-4 line-clamp-3'>
                {post.excerpt}
              </p>
              
              <div className='flex flex-wrap gap-2 mb-4'>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className='flex items-center justify-between'>
                <span className='text-slate-500 dark:text-slate-400 text-sm'>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <button 
                  className='text-blue-600 dark:text-blue-400 font-medium hover:underline'
                  onClick={() => setSelectedArticle(post)}
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
          All Articles
        </h2>
        
        <div className='flex flex-wrap gap-3 mb-8'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-lg'
                  : 'bg-white dark:bg-black text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-900 border border-slate-200 dark:border-slate-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className='bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group'
            >
              <div className='flex items-center gap-2 mb-3'>
                <span className='px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full'>
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <span className='text-slate-500 dark:text-slate-400 text-sm'>
                  {post.readTime}
                </span>
              </div>
              
              <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
                {post.title}
              </h3>
              
              <p className='text-slate-600 dark:text-slate-400 mb-4 line-clamp-2'>
                {post.excerpt}
              </p>
              
              <div className='flex flex-wrap gap-1 mb-4'>
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className='flex items-center justify-between'>
                <span className='text-slate-500 dark:text-slate-400 text-sm'>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <button 
                  className='text-blue-600 dark:text-blue-400 font-medium hover:underline'
                  onClick={() => setSelectedArticle(post)}
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className='mt-16 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-2xl p-8 text-white text-center'>
        <h3 className='text-2xl font-bold mb-4'>
          Stay Updated
        </h3>
        <p className='mb-6 opacity-90'>
          Get notified when I publish new articles about web development, AI, and design.
        </p>
        <div className='flex max-w-md mx-auto gap-3'>
          <input
            type='email'
            placeholder='Enter your email'
            className='flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50'
          />
          <button className='px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-slate-100 transition-colors duration-200'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <Link
          to='/projects'
          className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white rounded-lg hover:from-[#0099cc] hover:to-[#005bb5] transition-all duration-200'
        >
          <span>View My Projects</span>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    </section>
  );
};

export default Blog;
