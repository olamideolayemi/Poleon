import { ArrowLeft } from 'lucide-react';
import FloatingOrbs from '../components/FloatingOrbs';

const PortfolioGalleryPage = ({ study, onBackToProject }) => {
  if (!study) {
    return (
      <div className="relative pt-32">
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Gallery not found</h1>
            <button
              onClick={onBackToProject}
              className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400"
            >
              Back to Project
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
            alt={`${study.company} gallery`}
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/95 via-[#0a0e27]/90 to-[#080d24]/95" />
        </div>
        <FloatingOrbs />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <button
            onClick={onBackToProject}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Project
          </button>

          <div className="mb-8">
            <p className="text-cyan-300 uppercase text-xs tracking-[0.18em] mb-2">Gallery Library</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{study.company}</h1>
          </div>

          {Array.isArray(study.gallery) && study.gallery.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {study.gallery.map((image, index) => (
                <div
                  key={`${study.slug}-gallery-page-${index}`}
                  className="rounded-2xl border border-white/15 bg-white/5 overflow-hidden aspect-[4/3]"
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
          ) : (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-gray-300">
              No gallery images available for this project yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioGalleryPage;
