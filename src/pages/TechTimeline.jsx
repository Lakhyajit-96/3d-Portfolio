import { useState } from 'react';

const TechStackTimeline = () => {
  const [activeYear, setActiveYear] = useState(2025);

  const techTimeline = [
    {
      year: 2025,
      technologies: [
        { name: 'Three.js', level: 'Expert', color: 'bg-green-500' },
        { name: 'AI Integration', level: 'Expert', color: 'bg-purple-500' },
        { name: 'Next.js 15', level: 'Advanced', color: 'bg-blue-500' },
        { name: 'TypeScript', level: 'Expert', color: 'bg-blue-600' }
      ],
      description: 'Mastered 3D web development and AI integration, built award-winning applications'
    },
    {
      year: 2024,
      technologies: [
        { name: 'React', level: 'Expert', color: 'bg-cyan-500' },
        { name: 'Node.js', level: 'Advanced', color: 'bg-green-600' },
        { name: 'MongoDB', level: 'Advanced', color: 'bg-green-700' },
        { name: 'TailwindCSS', level: 'Expert', color: 'bg-teal-500' }
      ],
      description: 'Focused on full-stack development and modern CSS frameworks'
    },
    {
      year: 2023,
      technologies: [
        { name: 'JavaScript', level: 'Expert', color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 'Expert', color: 'bg-orange-500' },
        { name: 'Git', level: 'Advanced', color: 'bg-red-500' },
        { name: 'VS Code', level: 'Expert', color: 'bg-blue-500' }
      ],
      description: 'Built foundation in web development fundamentals and version control'
    }
  ];

  const currentYearData = techTimeline.find(item => item.year === activeYear);

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Tech Stack{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Timeline
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        My journey through technologies and frameworks over the years.
      </p>

      {/* Year Selector */}
      <div className='flex flex-wrap gap-4 mt-8 mb-12'>
        {techTimeline.map((item) => (
          <button
            key={item.year}
            onClick={() => setActiveYear(item.year)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeYear === item.year
                ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-lg'
                : 'bg-white dark:bg-black text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-900 border border-slate-200 dark:border-slate-600'
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>

      {/* Timeline Content */}
      <div className='bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
            {activeYear} - Key Technologies
          </h2>
          <p className='text-slate-600 dark:text-slate-400'>
            {currentYearData?.description}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {currentYearData?.technologies.map((tech, index) => (
            <div
              key={index}
              className='bg-slate-50 dark:bg-black rounded-lg p-4 hover:shadow-md transition-all duration-300'
            >
              <div className='flex items-center gap-3 mb-2'>
                <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                <span className='font-semibold text-slate-900 dark:text-white'>
                  {tech.name}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-slate-600 dark:text-slate-400'>
                  {tech.level}
                </span>
                <div className='flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2'>
                  <div 
                    className={`h-2 rounded-full ${tech.color} transition-all duration-500`}
                    style={{ 
                      width: tech.level === 'Expert' ? '100%' : 
                             tech.level === 'Advanced' ? '80%' : '60%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className='mt-8 pt-8 border-t border-slate-200 dark:border-slate-600'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
            Learning Journey
          </h3>
          <div className='relative'>
            <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00c6ff] to-[#0072ff]'></div>
            {techTimeline.map((item, index) => (
              <div key={item.year} className='relative flex items-center mb-6'>
                <div className={`w-8 h-8 rounded-full border-4 border-white dark:border-black ${
                  activeYear === item.year ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff]' : 'bg-slate-300 dark:bg-slate-600'
                } z-10`}></div>
                <div className='ml-6'>
                  <h4 className='font-semibold text-slate-900 dark:text-white'>
                    {item.year}
                  </h4>
                  <p className='text-sm text-slate-600 dark:text-slate-400'>
                    {item.technologies.length} technologies mastered
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackTimeline;
