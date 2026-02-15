import { useEffect, useMemo, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import { blogPosts } from './data/blogPosts';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState(null);

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
    [selectedBlogSlug]
  );

  const openBlogPost = (slug) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-detail');
  };

  const closeBlogPost = () => {
    setCurrentPage('blog');
    setSelectedBlogSlug(null);
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
        return <PortfolioPage />;
      case 'blog':
        return <BlogPage onOpenPost={openBlogPost} />;
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
    </div>
  );
}
