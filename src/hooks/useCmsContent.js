import { useEffect, useState } from 'react';
import { blogPosts as localBlogPosts } from '../data/blogPosts';
import { portfolio as localPortfolio } from '../data/portfolio';
import { sanityCms } from '../lib/sanityCms';

const mergeBySlug = (localItems, remoteItems) => {
  const map = new Map();

  localItems.forEach((item) => {
    if (item?.slug) map.set(item.slug, item);
  });

  remoteItems.forEach((item) => {
    if (item?.slug) map.set(item.slug, item);
  });

  return Array.from(map.values());
};

const fallbackState = {
  blogPosts: localBlogPosts,
  portfolioProjects: localPortfolio,
  loading: false,
  source: 'local',
};

export const useCmsContent = () => {
  const [state, setState] = useState({
    blogPosts: localBlogPosts,
    portfolioProjects: localPortfolio,
    loading: sanityCms.isConfigured,
    source: sanityCms.isConfigured ? 'cms-loading' : 'local',
  });

  useEffect(() => {
    if (!sanityCms.isConfigured) {
      setState(fallbackState);
      return;
    }

    let isCancelled = false;

    const load = async () => {
      try {
        const [blogPosts, portfolioProjects] = await Promise.all([
          sanityCms.fetchBlogPosts(),
          sanityCms.fetchPortfolioProjects(),
        ]);

        if (isCancelled) return;

        const hasCmsBlog = blogPosts.length > 0;
        const hasCmsPortfolio = portfolioProjects.length > 0;
        const hasAnyCmsContent = hasCmsBlog || hasCmsPortfolio;

        setState({
          blogPosts: mergeBySlug(localBlogPosts, blogPosts),
          portfolioProjects: mergeBySlug(localPortfolio, portfolioProjects),
          loading: false,
          source: hasAnyCmsContent ? 'combined' : 'local',
        });
      } catch (error) {
        if (isCancelled) return;
        console.error('CMS fetch failed, using local content.', error);
        setState(fallbackState);
      }
    };

    load();
    return () => {
      isCancelled = true;
    };
  }, []);

  return state;
};
