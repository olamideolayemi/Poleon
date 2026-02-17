import FloatingOrbs from "../components/FloatingOrbs";
import GridOverlay from "../components/GridOverlay";
import { portfolio } from "../data/portfolio";
// Portfolio Page
const PortfolioPage = ({ projects = portfolio, onOpenProject }) => {
  const heroBackgroundImage = "/images/photo-1460925895917-afdab827c52f.jpeg";

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
            We’ve partnered with many brands across different industries. Here
            are a couple of examples that showcase our approach, process, and
            results.
          </p>
        </div>
      </section>

      {/* Portfolio Cards */}
      <section className="relative py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((study) => (
              <article
                key={study.slug}
                className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <div className="relative h-52 md:h-60">
                  <img
                    src={study.heroImage}
                    alt={`${study.company} project overview`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/55 to-slate-950/90" />
                  <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-xl border border-white/20 bg-white/10 overflow-hidden">
                        <img
                          src={study.logo}
                          alt={`${study.company} logo`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                          {study.industry}
                        </p>
                        <h3 className="text-2xl font-bold text-white">
                          {study.company}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-200">{study.excerpt}</p>
                  </div>
                </div>

                <div className="p-6">
                  <button
                    onClick={() => onOpenProject?.(study.slug)}
                    className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-95 transition-opacity"
                  >
                    View Project
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
