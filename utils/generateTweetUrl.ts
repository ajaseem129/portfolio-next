import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';

export const generateTweetUrl = (
  matter: EnrichedBlogPostMatter | EnrichedProjectMatter
) => {
  const twitterUrl = 'https://twitter.com/intent/tweet';
  const baseUrl = 'https://drak.tbag.life';
  if (matter.path.includes(MDXContentType.Project)) {
    const projectMatter = matter as EnrichedProjectMatter;
    return `${twitterUrl}?text=${projectMatter.name} by Abdul Jaseem&url=${baseUrl}${projectMatter.path}`;
  }

  if (matter.path.includes(MDXContentType.BlogPost)) {
    const blogPostMatter = matter as EnrichedBlogPostMatter;
    return `${twitterUrl}?text=${blogPostMatter.title} by Abdul Jaseem&url=${baseUrl}${blogPostMatter.path}`;
  }

  return twitterUrl;
};
