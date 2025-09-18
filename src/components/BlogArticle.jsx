import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const BlogArticle = ({ article, onBack, onNavigateToArticle, allArticles }) => {
  // Get random related articles (excluding current article)
  const getRandomRelatedArticles = () => {
    if (!allArticles) return [];
    
    const otherArticles = allArticles.filter(a => a.id !== article.id);
    const shuffled = [...otherArticles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  const relatedArticles = getRandomRelatedArticles();

  return (
    <section className='max-container'>
      {/* Back Button */}
      <div className='mb-8'>
        <button
          onClick={onBack}
          className='inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors duration-200'
        >
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain rotate-180' />
          <span>Back to Blog</span>
        </button>
      </div>

      {/* Article Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-3 py-1 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-sm rounded-full'>
            {article.category}
          </span>
          <span className='text-slate-500 dark:text-slate-400 text-sm'>
            {article.readTime}
          </span>
          <span className='text-slate-500 dark:text-slate-400 text-sm'>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        <h1 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
          {article.title}
        </h1>
        
        <p className='text-xl text-slate-600 dark:text-slate-400 leading-relaxed'>
          {article.excerpt}
        </p>
      </div>

      {/* Article Content */}
      <div className='bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600'>
        <div className='prose prose-lg max-w-none dark:prose-invert'>
          {article.fullContent}
        </div>
      </div>

      {/* Article Footer */}
      <div className='mt-8 flex flex-wrap gap-2'>
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className='px-3 py-1 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 text-sm rounded-full'
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      <div className='mt-12'>
        <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
          Related Articles
        </h3>
        <div className='grid md:grid-cols-2 gap-6'>
          {relatedArticles.length > 0 ? (
            relatedArticles.map((relatedArticle, index) => (
              <div 
                key={relatedArticle.id}
                className='bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 cursor-pointer group'
                onClick={() => {
                  if (onNavigateToArticle) {
                    onNavigateToArticle(relatedArticle.title);
                  } else {
                    alert(`Related article: ${relatedArticle.title}`);
                  }
                }}
              >
                <h4 className='text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
                  {relatedArticle.title}
                </h4>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  {relatedArticle.excerpt}
                </p>
                <div className='mt-3 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium'>
                  <span>Read Article</span>
                  <svg className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-2 text-center text-slate-500 dark:text-slate-400 py-8'>
              No related articles available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
