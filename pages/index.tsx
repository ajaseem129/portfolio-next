import type { GetStaticProps, NextPage } from 'next';
import { SocialProfileJsonLd, SocialProfileJsonLdProps } from 'next-seo';

import { getAllProjects } from '@lib/mdx/projects';
import { HeroSection } from '@sections/HomePage/Hero';
import { IntroductionSection } from '@sections/HomePage/Introduction';
// import { LatestPostsSection } from '@sections/HomePage/LatestPosts';
// import { LatestProjectsSection } from '@sections/HomePage/LatestProjects';
import { ContactCard } from '@components/Card';
import { getBaseUrl } from '@utils/getBaseUrl';
import { socialProfiles } from '@config/profiles.config';

import type { EnrichedProjectMatter } from './projects/[slug]';

const baseUrl = getBaseUrl();

const jsonLdProps: SocialProfileJsonLdProps = {
  name: 'Abdul Jaseem',
  type: 'Person',
  url: baseUrl,
  sameAs: socialProfiles
    .filter(({ to }) => !to.includes(baseUrl) && !to.includes('mailto:'))
    .map(({ to }) => to),
};

type HomePageProps = {
  posts: [];
  projects: EnrichedProjectMatter[];
};

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <SocialProfileJsonLd {...jsonLdProps} />
      <HeroSection />
      <IntroductionSection />
      {/* <LatestPostsSection posts={props.posts} />
      <LatestProjectsSection projects={props.projects} /> */}
      <ContactCard />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: [],
      projects: await getAllProjects(),
    },
  };
};
