import { getBaseUrl } from '@utils/getBaseUrl';
import type { NextSeoProps } from 'next-seo';
import type { OpenGraphArticle } from 'next-seo/lib/types';
import { TwitterHandle } from './profiles.config';

const baseUrl = getBaseUrl();

type SeoPropsBuilderInput = {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: OpenGraphArticle;
};

export const generateSeoProps = (
  input: SeoPropsBuilderInput
): NextSeoProps => ({
  canonical: input.url,
  title: input.title,
  description: input.description,
  twitter: {
    cardType: 'summary_large_image',
    handle: TwitterHandle,
  },
  openGraph: {
    url: input.url,
    title: input.title,
    description: input.description,
    images: input.image
      ? [
          {
            url: input.image,
            width: 1200,
            height: 630,
            alt: input.title,
          },
        ]
      : undefined,
    type: input.type ?? 'website',
    site_name: 'drak.tbag.life',
    article: input.article,
    profile: {
      firstName: 'Abdul',
      lastName: 'Jaseem',
      username: 'ajaseem129',
    },
  },
});

export const defaultSeoProps = generateSeoProps({
  title: 'Abdul Jaseem C K – Tech Lead',
  description:
    'I am a freelance developer who helps individuals and companies build better web applications.',
  url: baseUrl,
  image: `${baseUrl}/api/og`,
});
