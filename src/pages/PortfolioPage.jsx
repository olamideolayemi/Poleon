import { Filter, Sparkles } from 'lucide-react';
import { useState } from 'react';
import FloatingOrbs from '../components/FloatingOrbs';
import GridOverlay from '../components/GridOverlay';
// Portfolio Page
const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const heroBackgroundImage =
    '/images/photo-1460925895917-afdab827c52f.jpeg';

  const categories = ['All', 'E-commerce', 'SaaS', 'Finance', 'Health', 'Technology'];

  const projects = [
    {
      category: 'E-commerce',
      title: 'TechMart Digital Transformation',
      description: 'Complete digital overhaul leading to 3X revenue growth',
      results: { revenue: '+287%', users: '150K', engagement: '+165%' },
      emoji: '🛍️',
      tags: ['SEO', 'Social Media', 'Analytics']
    },
    {
      category: 'SaaS',
      title: 'CloudSync Product Launch',
      description: 'Strategic launch campaign that acquired 50K users in 90 days',
      results: { users: '50K', retention: '89%', mrr: '+$250K' },
      emoji: '☁️',
      tags: ['Content Strategy', 'Paid Ads', 'Community']
    },
    {
      category: 'Finance',
      title: 'FinPro Complete Rebrand',
      description: 'Brand identity refresh with massive engagement boost',
      results: { engagement: '+165%', reach: '2M', conversion: '+45%' },
      emoji: '💼',
      tags: ['Branding', 'Social Growth', 'PR']
    },
    {
      category: 'Health',
      title: 'WellnessHub Scale',
      description: 'Multi-channel growth strategy reaching 2M people',
      results: { reach: '2M', leads: '25K', roi: '12X' },
      emoji: '🏥',
      tags: ['Content', 'Influencer', 'SEO']
    },
    {
      category: 'Technology',
      title: 'DevTools Market Entry',
      description: 'B2B SaaS launch with developer-focused strategy',
      results: { signups: '30K', arr: '$1.2M', churn: '3%' },
      emoji: '⚙️',
      tags: ['Developer Marketing', 'Content', 'Community']
    },
    {
      category: 'E-commerce',
      title: 'FashionHub Relaunch',
      description: 'Social-first strategy driving luxury fashion sales',
      results: { revenue: '+420%', followers: '200K', roas: '8.5X' },
      emoji: '👗',
      tags: ['Social Commerce', 'Influencer', 'Paid Social']
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Marketing performance results dashboard"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/95 via-[#0a0e27]/85 to-[#080d24]/95" />
        </div>
        <FloatingOrbs />
        <GridOverlay />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Success Stories
            </span>
            <br />
            That Speak Volumes
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real brands. Real growth. Real impact.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6">{project.emoji}</div>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-gray-500 text-sm capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default PortfolioPage;
