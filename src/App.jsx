import { useEffect, useMemo, useCallback, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
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

function BlogDetailRoute({ blogPosts }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const selectedBlog = useMemo(
    () => blogPosts.find((post) => post.slug === slug) ?? null,
    [blogPosts, slug]
  );

  return (
    <BlogDetailPage
      post={selectedBlog}
      allPosts={blogPosts}
      onOpenPost={(nextSlug) => navigate(`/blog/${nextSlug}`)}
      onBack={() => navigate('/blog')}
    />
  );
}

function PortfolioDetailRoute({ portfolioProjects }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const selectedProject = useMemo(
    () => portfolioProjects.find((study) => study.slug === slug) ?? null,
    [portfolioProjects, slug]
  );

  return (
    <PortfolioDetailPage
      study={selectedProject}
      onBack={() => navigate('/portfolio')}
      onOpenGallery={() => navigate(`/portfolio/${slug}/gallery`)}
    />
  );
}

function PortfolioGalleryRoute({ portfolioProjects }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const selectedProject = useMemo(
    () => portfolioProjects.find((study) => study.slug === slug) ?? null,
    [portfolioProjects, slug]
  );

  return (
    <PortfolioGalleryPage
      study={selectedProject}
      onBackToProject={() => navigate(`/portfolio/${slug}`)}
    />
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { blogPosts, portfolioProjects } = useCmsContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const currentPage = useMemo(() => {
    const path = location.pathname;

    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/portfolio')) return 'portfolio';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/contact')) return 'contact';

    return 'home';
  }, [location.pathname]);

  const navigateToPage = useCallback(
    (page) => {
      const routeMap = {
        home: '/',
        about: '/about',
        services: '/services',
        portfolio: '/portfolio',
        blog: '/blog',
        contact: '/contact',
      };

      navigate(routeMap[page] ?? '/');
    },
    [navigate]
  );

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans antialiased overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={navigateToPage} isScrolled={isScrolled} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={navigateToPage} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                projects={portfolioProjects}
                onOpenProject={(slug) => navigate(`/portfolio/${slug}`)}
              />
            }
          />
          <Route
            path="/portfolio/:slug"
            element={<PortfolioDetailRoute portfolioProjects={portfolioProjects} />}
          />
          <Route
            path="/portfolio/:slug/gallery"
            element={<PortfolioGalleryRoute portfolioProjects={portfolioProjects} />}
          />
          <Route
            path="/blog"
            element={<BlogPage posts={blogPosts} onOpenPost={(slug) => navigate(`/blog/${slug}`)} />}
          />
          <Route path="/blog/:slug" element={<BlogDetailRoute blogPosts={blogPosts} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer setCurrentPage={navigateToPage} />
    </div>
  );
}
