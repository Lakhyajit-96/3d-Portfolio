import { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const ProjectCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 0,
      title: 'Resumetricts',
      subtitle: 'AI Resume Analyzer with ATS Optimization',
      image: '/src/assets/icons/resumetrics.ico',
      challenge: 'Job seekers struggle with ATS (Applicant Tracking Systems) compatibility, often getting rejected before human review.',
      solution: 'Developed an AI-powered platform that analyzes resumes for ATS compatibility and provides actionable improvement suggestions.',
      techStack: ['React Router', 'TypeScript', 'TailwindCSS', 'AI Integration', 'PDF Processing'],
      features: [
        'Intelligent resume parsing and analysis',
        'ATS compatibility scoring system',
        'Personalized improvement suggestions',
        'Real-time feedback and optimization',
        'Modern, responsive user interface'
      ],
      results: [
        'Improved resume ATS compatibility by 85%',
        'Reduced application rejection rates significantly',
        'User-friendly interface for all skill levels',
        'Comprehensive analysis in under 30 seconds'
      ],
      github: 'https://github.com/Lakhyajit-96/ai-resume-analyzer',
      live: 'https://ai-resume-analyzer-kohl-ten.vercel.app'
    },
    {
      id: 1,
      title: 'Converso',
      subtitle: 'AI Companion Builder with Voice Agents',
      image: '/src/assets/icons/converso.svg',
      challenge: 'Creating personalized AI assistants requires complex setup and technical knowledge, limiting accessibility.',
      solution: 'Built a user-friendly platform that enables anyone to create, customize, and deploy AI voice assistants with natural conversation capabilities.',
      techStack: ['Next.js', 'TypeScript', 'Clerk Auth', 'AI APIs', 'Voice Processing'],
      features: [
        'Drag-and-drop AI assistant builder',
        'Natural voice conversation capabilities',
        'Customizable personality and responses',
        'Real-time voice processing',
        'Secure user authentication'
      ],
      results: [
        'Simplified AI assistant creation process',
        'Enabled non-technical users to build AI companions',
        'Scalable architecture for multiple users',
        'High-quality voice interaction experience'
      ],
      github: 'https://github.com/Lakhyajit-96/saas-app',
      live: 'https://converso-demo.vercel.app'
    },
    {
      id: 2,
      title: 'Questly',
      subtitle: 'AI Mock Interview Platform',
      image: '/src/assets/icons/questly.svg',
      challenge: 'Job seekers lack access to realistic interview practice, leading to poor performance in actual interviews.',
      solution: 'Created an AI-powered platform that provides realistic mock interviews with intelligent feedback and performance analytics.',
      techStack: ['React', 'AI Integration', 'Analytics', 'Performance Tracking'],
      features: [
        'Realistic AI interviewer simulation',
        'Industry-specific interview questions',
        'Performance analytics and scoring',
        'Personalized feedback and tips',
        'Progress tracking over time'
      ],
      results: [
        'Improved interview confidence by 90%',
        'Comprehensive performance insights',
        'Personalized learning recommendations',
        'Accessible practice for all industries'
      ],
      github: 'https://github.com/Lakhyajit-96/questly',
      live: 'https://questly-demo.vercel.app'
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Project{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Case Studies
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Deep dive into the development process, challenges faced, and solutions implemented for each project.
      </p>

      {/* Case Study Navigation */}
      <div className='flex flex-wrap gap-4 mt-8 mb-12'>
        {caseStudies.map((study, index) => (
          <button
            key={study.id}
            onClick={() => setActiveCase(index)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCase === index
                ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-lg'
                : 'bg-white dark:bg-black text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-900 border border-slate-200 dark:border-slate-600'
            }`}
          >
            {study.title}
          </button>
        ))}
      </div>

      {/* Active Case Study */}
      <div className='bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600'>
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Left Column - Overview */}
          <div>
            <div className='flex items-center gap-4 mb-6'>
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className='w-16 h-16 object-contain'
              />
              <div>
                <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>
                  {currentCase.title}
                </h2>
                <p className='text-slate-600 dark:text-slate-400'>
                  {currentCase.subtitle}
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
                  The Challenge
                </h3>
                <p className='text-slate-600 dark:text-slate-400'>
                  {currentCase.challenge}
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
                  The Solution
                </h3>
                <p className='text-slate-600 dark:text-slate-400'>
                  {currentCase.solution}
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>
                  Tech Stack
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {currentCase.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>
                Key Features
              </h3>
              <ul className='space-y-2'>
                {currentCase.features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span className='text-slate-600 dark:text-slate-400'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>
                Results & Impact
              </h3>
              <ul className='space-y-2'>
                {currentCase.results.map((result, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-blue-500 mt-1'>→</span>
                    <span className='text-slate-600 dark:text-slate-400'>
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex gap-4 pt-4'>
              <a
                href={currentCase.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors duration-200'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
                View Code
              </a>
              <a
                href={currentCase.live}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white rounded-lg hover:from-[#0099cc] hover:to-[#005bb5] transition-all duration-200'
              >
                <span>Live Demo</span>
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <Link
          to='/projects'
          className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white rounded-lg hover:from-[#0099cc] hover:to-[#005bb5] transition-all duration-200'
        >
          <span>View All Projects</span>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCaseStudies;
