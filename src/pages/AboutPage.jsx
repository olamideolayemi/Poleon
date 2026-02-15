import { Sparkles, Target, Users, Zap } from 'lucide-react';
import FloatingOrbs from '../components/FloatingOrbs';
import GridOverlay from '../components/GridOverlay';
// About Page
const AboutPage = () => {
  const values = [
    { icon: <Target className="w-8 h-8" />, title: 'Strategic', description: 'Every decision backed by data and market intelligence' },
    { icon: <Zap className="w-8 h-8" />, title: 'Agile', description: 'Rapid execution with continuous optimization' },
    { icon: <Users className="w-8 h-8" />, title: 'Collaborative', description: 'Your success is our success - true partnership' },
    { icon: <Sparkles className="w-8 h-8" />, title: 'Innovative', description: 'Cutting-edge solutions for modern challenges' }
  ];

  const timeline = [
    { year: '2019', event: 'Founded', description: 'POLEON launched with a vision to revolutionize digital strategy' },
    { year: '2020', event: 'First 5 Clients', description: 'Rapidly grew client base with proven results' },
    { year: '2022', event: 'Series A Funding', description: 'Secured investment to scale operations' },
    { year: '2024', event: 'Global Expansion', description: 'Opened offices in 5 countries' },
    { year: '2026', event: 'Industry Leader', description: 'Recognized as top digital strategy firm' }
  ];

  const team = [
    { name: 'Anthony Ojonimi', role: 'Founder & Lead Strategist', expertise: 'Leads social strategy, planning, and monthly optimization to ensure each client sees measurable growth.' },
    { name: 'Chioma Jacob', role: 'Content Strategy Lead', expertise: 'Owns content calendars, campaign direction, and brand voice consistency across all channels' },
    { name: 'Silva', role: 'Graphics Designer', expertise: 'Designs visual assets, branded creatives, and campaign graphics that make every post clear, polished, and on-brand.' },
    { name: 'Olamide Olayemi', role: 'Web and Software Engineer', expertise: 'Builds and maintains the web and software systems that support campaign execution, reporting workflows, and team productivity.' }
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <FloatingOrbs />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Architects of
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're not just consultants. We're growth partners obsessed with turning ambitious visions into market-dominating realities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                To empower businesses with strategic digital solutions that drive exponential growth and lasting market impact.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe every brand has untapped potential. Our role is to unlock it through data-driven strategy, creative execution, and relentless optimization. In a digital-first world, standing still means falling behind. We help you sprint ahead.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-600 hidden md:block" />
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-6 h-6 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full border-4 border-[#0a0e27] flex-shrink-0 z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-400">
              Expert strategists driving innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default AboutPage;
