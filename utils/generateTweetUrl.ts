import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';

export const generateTweetUrl = (matter: EnrichedProjectMatter) => {
  const twitterUrl = 'https://twitter.com/intent/tweet';
  const baseUrl = 'https://drak.tbag.life';
  if (matter.path.includes(MDXContentType.Project)) {
    const projectMatter = matter as EnrichedProjectMatter;
    return `${twitterUrl}?text=${projectMatter.name} by Abdul Jaseem&url=${baseUrl}${projectMatter.path}`;
  }

  return twitterUrl;
};
