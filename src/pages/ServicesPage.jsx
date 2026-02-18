import { BarChart3, Check, ChevronRight, Globe, MessageSquare, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';
import FloatingOrbs from '../components/FloatingOrbs';
import GridOverlay from '../components/GridOverlay';
// Services Page
const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const heroBackgroundImage =
    '/images/photo-1460925895917-afdab827c52f.jpeg';

  const services = [
     {
      title: 'Analytics & Optimization',
      icon: <BarChart3 className="w-10 h-10" />,
      description: 'Performance tracking and enhancement',
      details: 'Advanced analytics implementation, custom dashboards, and continuous A/B testing to maximize every aspect of your digital performance.',
      features: ['Custom Analytics', 'Conversion Optimization', 'Performance Tracking', 'Data Visualization']
    },
    {
      title: 'Brand Identity',
      icon: <Sparkles className="w-10 h-10" />,
      description: 'Distinctive digital presence',
      details: 'We build cohesive brand identities that stand out in crowded markets, from visual design to brand voice and messaging architecture.',
      features: ['Brand Guidelines', 'Visual Identity', 'Messaging Framework', 'Style Systems']
    },
    {
      title: 'Content Strategy',
      icon: <MessageSquare className="w-10 h-10" />,
      description: 'Compelling narratives that convert',
      details: 'From strategic planning to execution, we develop content frameworks that resonate with your audience and drive measurable business outcomes.',
      features: ['Content Planning', 'Copywriting', 'Visual Strategy', 'Distribution Channels']
    },
    {
      title: 'Free Auditing',
      icon: <Users className="w-10 h-10" />,
      description: 'Comprehensive digital performance audit',
      details: 'We run a no-cost audit of your digital presence, marketing funnel, and content performance to uncover bottlenecks, missed opportunities, and clear next steps for growth.',
      features: ['Channel Audit', 'Conversion Review', 'Competitor Snapshot', 'Action Plan']
    },
    {
      title: 'Social Media Growth',
      icon: <TrendingUp className="w-10 h-10" />,
      description: 'Data-driven community building',
      details: 'Strategic content creation, audience targeting, and engagement optimization designed to build authentic communities that convert into loyal customers.',
      features: ['Content Calendar', 'Influencer Partnerships', 'Community Management', 'Paid Social Strategy']
    },
    {
      title: 'Digital Presence Management',
      icon: <Globe className="w-10 h-10" />,
      description: 'Comprehensive online positioning strategy',
      details: 'We craft and manage your entire digital ecosystem - from website architecture to social platforms, ensuring consistent brand messaging and optimal user experience across all touchpoints.',
      features: ['Website Strategy', 'SEO Optimization', 'Online Reputation', 'Multi-Platform Integration']
    }
  ];

  const accessGuideRows = [
    {
      platform: 'Instagram & Facebook',
      access: 'Add us as an admin/editor via Meta Business Suite.',
    },
    {
      platform: 'TikTok',
      access: 'Add us as a Business Manager under "Account Access".',
    },
    {
      platform: 'LinkedIn',
      access: 'Add us as a Page Admin under "Manage Admins".',
    },
    {
      platform: 'YouTube',
      access: 'Grant access via YouTube Studio > Permissions.',
    },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Marketing analytics dashboard and planning"
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
              Strategic Services
            </span>
            <br />
            That Drive Growth
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive digital solutions designed for measurable impact
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
              >
                <div
                  className="p-8 cursor-pointer flex items-center justify-between"
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-8 h-8 text-cyan-400 transition-transform duration-500 ${
                      expandedService === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                {expandedService === index && (
                  <div className="px-8 pb-8 border-t border-white/10 pt-6 animate-fade-in">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3"
                        >
                          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Access & Security Guide */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/image-002.jpeg"
            alt="Social media access and security guide background"
            className="w-full h-full object-cover opacity-35"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/85 via-[#0a0e27]/80 to-[#080d24]/85" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/40 via-slate-900/75 to-violet-950/40 p-8 md:p-12">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              SOCIAL MEDIA ACCESS &amp; SECURITY GUIDE
            </h2>
            <p className="text-xl md:text-3xl font-semibold text-gray-200 mb-10 md:mb-14 max-w-4xl leading-tight">
              How to Grant Access Without Sharing Your Password.
            </p>

            <div className="border border-white/15 rounded-2xl overflow-hidden">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr className="bg-white/5">
                    <th className="w-[38%] border border-white/15 px-3 md:px-6 py-3 md:py-5 text-left text-sm md:text-xl font-bold text-cyan-300">
                      Platform
                    </th>
                    <th className="border border-white/15 px-3 md:px-6 py-3 md:py-5 text-left text-sm md:text-xl font-bold text-cyan-300">
                      How to Grant Access
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {accessGuideRows.map((row) => (
                    <tr key={row.platform}>
                      <td className="border border-white/15 px-3 md:px-6 py-3 md:py-6 text-sm md:text-2xl font-medium text-white align-top">
                        {row.platform}
                      </td>
                      <td className="border border-white/15 px-3 md:px-6 py-3 md:py-6 text-sm md:text-2xl text-gray-200 align-top">
                        {row.access}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-md md:text-2xl font-semibold mt-10 md:mt-14 text-white">
              Preferred Secure Sharing Method: [LastPass / 1Password]
            </p>
          </div>
        </div>
      </section>

      {/* Client Expectations & Responsibilities */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/30 via-slate-900/70 to-violet-950/30 p-8 md:p-12">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
              CLIENT EXPECTATIONS &amp; RESPONSIBILITIES
            </h2>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-4xl">
              To make our collaboration smooth and effective, here&apos;s what we need from you:
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                <h3 className="text-cyan-300 font-bold text-sm md:text-base tracking-[0.12em] mb-3">
                  TIMELY FEEDBACK &amp; APPROVALS
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This helps us keep content on schedule.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                <h3 className="text-cyan-300 font-bold text-sm md:text-base tracking-[0.12em] mb-3">
                  BRAND ASSETS &amp; ACCESS
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Provide logos, brand colors, and brand guidelines.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                <h3 className="text-cyan-300 font-bold text-sm md:text-base tracking-[0.12em] mb-3">
                  CONTENT &amp; OFFERS
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Let us know of upcoming promotions or key business updates.
                </p>
              </article>
            </div>

            <p className="text-md md:text-2xl font-semibold text-white">
              When we work together as a team, your brand&apos;s social media will thrive!
            </p>
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-xl text-gray-400">
              Our proven methodology for digital success
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Clear Strategy</h3>
                <p className="text-gray-400">
                  We define focused direction based on your business goals and market realities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl text-2xl font-bold text-white mb-3">Quality Content</h3>
                <p className="text-gray-400">
                  We produce consistent, audience-first content designed to build trust and engagement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Measurable Results</h3>
                <p className="text-gray-400">
                  We track performance, report outcomes clearly, and improve continuously from data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default ServicesPage;
