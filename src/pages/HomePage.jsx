import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Globe,
  Play,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import FloatingOrbs from '../components/FloatingOrbs';
import GridOverlay from '../components/GridOverlay';
// Homepage
const HomePage = () => {
  const services = [
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: 'Digital Presence', 
      description: 'Strategic online positioning that amplifies your brand across every digital touchpoint.' 
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: 'Social Growth', 
      description: 'Data-driven social media strategies that build engaged communities and drive conversions.' 
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />, 
      title: 'Analytics & Optimization', 
      description: 'Deep insights and continuous optimization to maximize your digital ROI.' 
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      title: 'Content Strategy', 
      description: 'Compelling narratives and content frameworks that resonate with your audience.' 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: 'Client Onboarding', 
      description: 'Seamless integration processes that set the foundation for long-term success.' 
    },
    { 
      icon: <Sparkles className="w-8 h-8" />, 
      title: 'Brand Identity', 
      description: 'Cohesive digital identities that stand out in competitive markets.' 
    }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Deep dive into your business goals and market landscape' },
    { step: '02', title: 'Strategy', description: 'Custom roadmap aligned with your growth objectives' },
    { step: '03', title: 'Execution', description: 'Precision implementation with agile methodology' },
    { step: '04', title: 'Optimization', description: 'Continuous refinement based on data insights' }
  ];

  const portfolioItems = [
    { category: 'E-commerce', title: 'TechMart 3X Growth', results: '+287% Revenue', image: '🛍️' },
    { category: 'SaaS', title: 'CloudSync Launch', results: '50K Users', image: '☁️' },
    { category: 'Finance', title: 'FinPro Rebrand', results: '+165% Engagement', image: '💼' },
    { category: 'Health', title: 'WellnessHub Scale', results: '2M Reach', image: '🏥' }
  ];

  const testimonials = [
    { name: 'Sarah Chen', company: 'TechMart CEO', text: 'POLEON transformed our digital strategy. The results speak for themselves - triple revenue in 6 months.', rating: 5 },
    { name: 'Marcus Williams', company: 'CloudSync Founder', text: "The team's strategic approach and execution excellence are unmatched. They're true partners in growth.", rating: 5 },
    { name: 'Elena Rodriguez', company: 'FinPro CMO', text: "Working with POLEON was a game-changer. Their insights and strategy drove phenomenal engagement.", rating: 5 }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingOrbs />
        <GridOverlay />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <span className="text-cyan-400 text-sm font-medium">Next-Generation Digital Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Your Growth.
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Our Strategy.
              </span>
              <br />
              <span className="text-white">
                Real Results.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We architect digital ecosystems that drive measurable growth. Strategy meets execution for ambitious brands.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions designed for exponential growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">How We Help You Grow</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
                <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-violet-600 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real brands. Real growth. Real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6">{item.image}</div>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {item.results}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-950/30 to-violet-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">Driven By Data</h2>
              <p className="text-xl text-gray-400">
                Our results speak louder than promises
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={250} suffix="+" />
                </div>
                <p className="text-gray-400 text-lg">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={487} suffix="%" />
                </div>
                <p className="text-gray-400 text-lg">Avg. Growth Rate</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={50} suffix="M+" />
                </div>
                <p className="text-gray-400 text-lg">Total Reach</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-gray-400 text-lg">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-400">
              Success stories from brands we've empowered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-cyan-600 to-violet-700 rounded-3xl p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 text-center text-white">
              <h2 className="text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Join 250+ forward-thinking brands who've transformed their digital presence with POLEON.
              </p>
              <button className="px-10 py-5 bg-white text-violet-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105">
                Start Your Growth Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default HomePage;
