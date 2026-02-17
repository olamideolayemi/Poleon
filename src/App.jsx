import { useEffect, useMemo, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import PortfolioGalleryPage from './pages/PortfolioGalleryPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import { useCmsContent } from './hooks/useCmsContent';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState(null);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
  const { blogPosts, portfolioProjects, source, loading } = useCmsContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedBlogSlug]);

  const selectedBlog = useMemo(
    () => blogPosts.find((post) => post.slug === selectedBlogSlug) ?? null,
    [blogPosts, selectedBlogSlug]
  );
  const selectedProject = useMemo(
    () => portfolioProjects.find((study) => study.slug === selectedProjectSlug) ?? null,
    [portfolioProjects, selectedProjectSlug]
  );

  const openBlogPost = (slug) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-detail');
  };

  const closeBlogPost = () => {
    setCurrentPage('blog');
    setSelectedBlogSlug(null);
  };

  const openProject = (slug) => {
    setSelectedProjectSlug(slug);
    setCurrentPage('portfolio-detail');
  };

  const closeProject = () => {
    setCurrentPage('portfolio');
    setSelectedProjectSlug(null);
  };

  const openProjectGallery = () => {
    setCurrentPage('portfolio-gallery');
  };

  const closeProjectGallery = () => {
    setCurrentPage('portfolio-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage projects={portfolioProjects} onOpenProject={openProject} />;
      case 'portfolio-detail':
        return (
          <PortfolioDetailPage
            study={selectedProject}
            onBack={closeProject}
            onOpenGallery={openProjectGallery}
          />
        );
      case 'portfolio-gallery':
        return <PortfolioGalleryPage study={selectedProject} onBackToProject={closeProjectGallery} />;
      case 'blog':
        return <BlogPage posts={blogPosts} onOpenPost={openBlogPost} />;
      case 'blog-detail':
        return (
          <BlogDetailPage
            post={selectedBlog}
            allPosts={blogPosts}
            onOpenPost={openBlogPost}
            onBack={closeBlogPost}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans antialiased overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} isScrolled={isScrolled} />

      <main>{renderPage()}</main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* <div className="fixed bottom-4 right-4 z-[60] px-3 py-2 rounded-lg border border-white/15 bg-slate-950/85 backdrop-blur-sm text-xs text-gray-200">
        Content source:{' '}
        <span
          className={
            source === 'combined'
              ? 'text-cyan-300'
              : source === 'sanity'
                ? 'text-emerald-300'
                : 'text-amber-300'
          }
        >
          {loading
            ? 'Loading CMS...'
            : source === 'combined'
              ? 'Sanity + Local'
              : source === 'sanity'
                ? 'Sanity'
                : 'Local fallback'}
        </span>
      </div> */}
    </div>
  );
}
