import { ArrowLeft } from 'lucide-react';
import FloatingOrbs from '../components/FloatingOrbs';

const renderRichBlock = (block, index, slug) => {
  const key = `${slug}-${block.type}-${index}`;

  if (block.type === 'heading') {
    return (
      <h2 key={key} className="text-2xl md:text-3xl font-bold text-white pt-3">
        {block.text}
      </h2>
    );
  }

  if (block.type === 'subheading') {
    return (
      <h3 key={key} className="text-xl md:text-2xl font-semibold text-white pt-2">
        {block.text}
      </h3>
    );
  }

  if (block.type === 'quote') {
    return (
      <blockquote
        key={key}
        className="border-l-4 border-cyan-400/60 pl-5 py-2 text-gray-100 italic bg-white/[0.02] rounded-r-lg"
      >
        {block.text}
      </blockquote>
    );
  }

  if (block.type === 'list') {
    if (block.ordered) {
      return (
        <ol key={key} className="list-decimal pl-6 space-y-3 marker:text-cyan-300">
          {block.items?.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{item}</li>
          ))}
        </ol>
      );
    }

    return (
      <ul key={key} className="list-disc pl-6 space-y-3 marker:text-cyan-300">
        {block.items?.map((item, itemIndex) => (
          <li key={`${key}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p key={key}>{block.text}</p>;
};

const BlogDetailPage = ({ post, allPosts, onOpenPost, onBack }) => {
  const heroBackgroundImage =
    '/images/photo-1517048676732-d65bc937f952.jpeg';

  if (!post) {
    return (
      <div className="relative pt-32">
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Post not found</h1>
            <button
              onClick={onBack}
              className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400"
            >
              Back to Blog
            </button>
          </div>
        </section>
      </div>
    );
  }

  const relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 8);

  return (
    <div className="relative pt-32">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Marketing strategy discussion"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/95 via-[#0a0e27]/90 to-[#080d24]/95" />
        </div>
        <FloatingOrbs />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
            <article>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all blogs
              </button>

              <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-300 text-sm rounded-full mb-5">
                {post.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">{post.title}</h1>
              <p className="text-gray-400 mb-10">{post.date} • {post.readTime}</p>

              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                {post.richContent
                  ? post.richContent.map((block, index) => renderRichBlock(block, index, post.slug))
                  : post.content.map((paragraph, index) => <p key={`${post.slug}-${index}`}>{paragraph}</p>)}
              </div>
            </article>

            <aside className="lg:sticky lg:top-28">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h2 className="text-xl font-bold text-white mb-4">Related posts</h2>
                <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
                  {relatedPosts.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => onOpenPost?.(item.slug)}
                      className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors"
                    >
                      <p className="text-xs text-cyan-300 mb-2">{item.category}</p>
                      <p className="text-white font-semibold leading-snug mb-2">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.date} • {item.readTime}</p>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
