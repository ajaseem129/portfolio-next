import PortraitImage from '../../public/images/picture.jpeg';

import { styled, wavingAnimation } from '@config/stitches.config';

import { ContentWrapper } from '@components/Layout';
import { Picture } from '@components/Picture';
import { Card } from '@components/Card';

const StyledSection = styled('section', {
  backgroundColor: '$surface50',
  borderBottom: '2px solid $border',

  '> .content': {
    paddingTop: '4rem',
    paddingBottom: '2rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    columnGap: '4rem',

    '@md': { paddingTop: '6rem', paddingBottom: '3.5rem' },

    '.description': {
      '.title': { marginTop: '1rem', marginBottom: '1.5rem' },
      '.subtitle': { marginBottom: '1.5rem', fontWeight: '500' },
    },

    '.portrait': {
      display: 'none',

      '@md': { display: 'block', flexShrink: 0 },

      '&:hover': {
        cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>") 16 0, auto`,

        '[data-emoji] > span': {
          display: 'inline-block',
          animation: `${wavingAnimation} 2500ms`,
          transformOrigin: '70% 70%',
        },
      },
    },
  },

  '> .bookmarks': {
    paddingBottom: '6rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '1rem',

    '@md': { flexDirection: 'row', columnGap: '1rem' },

    '> div': { flex: 1 },
  },
});

export const IntroductionSection: React.FC = () => {
  return (
    <StyledSection id="introduction-section">
      <ContentWrapper className="content">
        <div className="description">
          <h3 className="title">Nice to have you here.</h3>
          <p className="subtitle">
            Hey, I&apos;m Abdul. I am a freelance web developer with a
            background in product management.
          </p>
          <p>
            As a full-stack developer and tech enthusiast, I bring a wealth of
            skills and a passion for innovation to the table. My experience in
            creating websites and managing server spaces, combined with my love
            for working through the command line, make me a valuable asset to
            any team. My passion has always been at the intersection of product
            and engineering. I mostly work with startups and small companies to
            create beautiful digital products and web applications.
          </p>
        </div>
        <Picture
          src={PortraitImage}
          alt="Abdul Jaseem Portrait"
          placeholder="blur"
          height="22rem"
          width="20rem"
          emoji="👋"
          className="portrait"
        />
      </ContentWrapper>
      <ContentWrapper className="bookmarks">
        {/* <Card
          background="secondary50"
          backgroundEmoji="secondary100"
          emoji="✍️"
          to="/blog"
        >
          <h5>Discover my blog.</h5>
          <p>
            Learn how to build digital products with React and other modern web
            development tools.
          </p>
        </Card> */}
        <Card
          background="secondary50"
          backgroundEmoji="secondary100"
          emoji="👨‍💻"
          to="/services"
        >
          <h5>Discover my services.</h5>
          <p>
            Looking for someone who takes over or supports development?
            Let&apos;s work together!
          </p>
        </Card>
      </ContentWrapper>
    </StyledSection>
  );
};
