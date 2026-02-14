import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import FloatingOrbs from '../components/FloatingOrbs';
import GridOverlay from '../components/GridOverlay';
// Blog Page
const BlogPage = () => {
  const posts = [
    {
      category: 'Strategy',
      title: '5 Digital Trends Reshaping Business in 2026',
      excerpt: 'Explore the emerging technologies and strategies that will define digital success this year.',
      date: 'Feb 10, 2026',
      readTime: '5 min read',
      emoji: '📈'
    },
    {
      category: 'Analytics',
      title: 'Data-Driven Decision Making: A Framework',
      excerpt: 'How to build a culture of analytics that drives growth at every level of your organization.',
      date: 'Feb 8, 2026',
      readTime: '7 min read',
      emoji: '📊'
    },
    {
      category: 'Social Media',
      title: 'The Evolution of Social Commerce',
      excerpt: 'From discovery to purchase - how social platforms are becoming full-funnel sales channels.',
      date: 'Feb 5, 2026',
      readTime: '6 min read',
      emoji: '🛒'
    },
    {
      category: 'Branding',
      title: 'Building Brand Authority in Saturated Markets',
      excerpt: 'Strategies for standing out when everyone is shouting for attention.',
      date: 'Feb 1, 2026',
      readTime: '8 min read',
      emoji: '🎯'
    },
    {
      category: 'Content',
      title: 'AI-Assisted Content: The New Normal',
      excerpt: 'How to leverage AI tools while maintaining authentic brand voice and creativity.',
      date: 'Jan 28, 2026',
      readTime: '5 min read',
      emoji: '🤖'
    },
    {
      category: 'Case Study',
      title: 'How We 3Xed Revenue for TechMart',
      excerpt: 'A deep dive into our e-commerce transformation strategy and execution.',
      date: 'Jan 25, 2026',
      readTime: '10 min read',
      emoji: '💡'
    }
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <FloatingOrbs />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Insights & Ideas
            </span>
            <br />
            From the Frontlines
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Strategic thinking, industry trends, and lessons from our work
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-950/30 to-violet-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-12">
              <div className="flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  The Future of Digital Strategy: AI, Authenticity, and Agility
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  As AI reshapes the digital landscape, we explore how brands can maintain authenticity while leveraging technology for unprecedented growth.
                </p>
                <div className="flex items-center gap-4 text-gray-400 mb-6">
                  <span>Feb 14, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 w-fit">
                  Read Article
                </button>
              </div>
              <div className="flex items-center justify-center text-9xl">
                🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                <div className="text-5xl mb-6">{post.emoji}</div>
                <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 text-sm rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm pt-4 border-t border-white/10">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default BlogPage;
