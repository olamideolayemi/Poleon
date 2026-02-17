const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-02-19';

const isConfigured = Boolean(projectId && dataset);

const buildQueryUrl = (query) => {
  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;
  const params = new URLSearchParams({ query });
  return `${endpoint}?${params.toString()}`;
};

const fetchQuery = async (query) => {
  const response = await fetch(buildQueryUrl(query));
  if (!response.ok) {
    throw new Error(`Sanity query failed (${response.status})`);
  }

  const payload = await response.json();
  return payload?.result ?? [];
};

const normalizeBlogPost = (post) => ({
  slug: post.slug,
  category: post.category || 'General',
  title: post.title || 'Untitled',
  excerpt: post.excerpt || '',
  date: post.date || '',
  readTime: post.readTime || '',
  emoji: post.emoji || '📝',
  content: Array.isArray(post.content) ? post.content : [],
  richContent: Array.isArray(post.richContent) ? post.richContent : undefined,
});

const normalizePortfolioProject = (project) => ({
  slug: project.slug,
  company: project.company || 'Untitled Project',
  industry: project.industry || 'General',
  logo: project.logo || '',
  heroImage: project.heroImage || '',
  excerpt: project.excerpt || '',
  gallery: Array.isArray(project.gallery) ? project.gallery.filter(Boolean) : [],
  sections: Array.isArray(project.sections)
    ? project.sections
        .filter((section) => section?.title && section?.body)
        .map((section) => ({ title: section.title, body: section.body }))
    : [],
});

export const sanityCms = {
  isConfigured,
  async fetchBlogPosts() {
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      "slug": coalesce(slug.current, _id),
      category,
      title,
      excerpt,
      "date": coalesce(displayDate, publishedAt),
      readTime,
      emoji,
      content,
      richContent[]{
        ...,
        "items": items[]
      }
    }`;

    const posts = await fetchQuery(query);
    return posts
      .filter((post) => post?.slug && post?.title)
      .map(normalizeBlogPost);
  },
  async fetchPortfolioProjects() {
    const query = `*[_type == "portfolioProject"] | order(_createdAt desc) {
      "slug": coalesce(slug.current, _id),
      company,
      industry,
      "logo": logo.asset->url,
      "heroImage": heroImage.asset->url,
      excerpt,
      "gallery": gallery[].asset->url,
      sections[]{
        title,
        body
      }
    }`;

    const projects = await fetchQuery(query);
    return projects
      .filter((project) => project?.slug && project?.company)
      .map(normalizePortfolioProject);
  },
};
