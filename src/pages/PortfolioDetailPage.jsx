import { ArrowLeft } from 'lucide-react';
import FloatingOrbs from '../components/FloatingOrbs';

const PortfolioDetailPage = ({ study, onBack, onOpenGallery }) => {
  if (!study) {
    return (
      <div className="relative pt-32">
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Project not found</h1>
            <button
              onClick={onBack}
              className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400"
            >
              Back to Portfolio
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative pt-32">
      <section className="relative py-16 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={study.heroImage}
            alt={`${study.company} case study`}
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/95 via-[#0a0e27]/90 to-[#080d24]/95" />
        </div>
        <FloatingOrbs />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/30 via-slate-900/70 to-violet-950/30 overflow-hidden">
            <div className="relative h-48 md:h-64">
              <img
                src={study.heroImage}
                alt={`${study.company} project overview`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/55 to-slate-950/90" />
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl border border-white/20 bg-white/10 overflow-hidden">
                    <img
                      src={study.logo}
                      alt={`${study.company} logo`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{study.industry}</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">{study.company}</h1>
                  </div>
                </div>
                <p className="text-gray-200 max-w-3xl">{study.excerpt}</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {Array.isArray(study.gallery) && study.gallery.length > 0 && (
                <section className="mb-8">
                  <h2 className="text-white text-lg font-semibold mb-4">Project Images</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.gallery.slice(0, 3).map((image, index) => (
                      <div
                        key={`${study.slug}-gallery-${index}`}
                        className="rounded-2xl border border-dashed border-white/25 bg-white/5 aspect-[4/3] overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`${study.company} gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  {study.gallery.length > 3 && (
                    <button
                      onClick={() => onOpenGallery?.()}
                      className="mt-4 px-5 py-2.5 rounded-lg border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10 transition-colors"
                    >
                      View more
                    </button>
                  )}
                </section>
              )}

              <div className="space-y-6">
                {(Array.isArray(study.sections) ? study.sections : []).map((section) => (
                  <section key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                    <h2 className="text-cyan-300 uppercase tracking-[0.16em] text-sm mb-3">{section.title}</h2>
                    <p className="text-gray-200 leading-relaxed whitespace-pre-line">{section.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;
