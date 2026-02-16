import { Sparkles } from 'lucide-react';
import FloatingOrbs from '../components/FloatingOrbs';
import { blogPosts } from '../data/blogPosts';

const BlogPage = ({ onOpenPost }) => {
  const heroBackgroundImage =
    '/images/photo-1454165804606-c3d57bc86b40.jpeg';
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredPost =
    sortedPosts.find((post) => post.slug !== 'home-office-case-study') ?? sortedPosts[0];
  const listPosts = sortedPosts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <div className="relative pt-32">
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Marketing content strategy workspace"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/95 via-[#0a0e27]/85 to-[#080d24]/95" />
        </div>
        <FloatingOrbs />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Insights & Ideas
            </span>
            <br />
            For Growing Brands
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Strategic thinking, execution lessons, and practical growth frameworks.
          </p>
        </div>
      </section>

      <section className="relative py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="bg-gradient-to-br from-cyan-950/30 to-violet-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-10 cursor-pointer hover:border-cyan-400/40 transition-colors"
            onClick={() => onOpenPost?.(featuredPost.slug)}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-cyan-300 text-sm">Featured Post</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{featuredPost.title}</h2>
            <p className="text-gray-300 text-lg mb-4 max-w-4xl">{featuredPost.excerpt}</p>
            <p className="text-gray-400 text-sm">{featuredPost.date} • {featuredPost.readTime}</p>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => onOpenPost?.(post.slug)}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              >
                <div className="text-5xl mb-6">{post.emoji}</div>
                <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 text-sm rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm pt-4 border-t border-white/10">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
