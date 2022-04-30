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
            Hey, I&apos;m Konstantin. I help individuals and companies build
            better web applications.
          </p>
          <p>
            As a freelance web developer and former product manager, I love
            building great web applications as much as shipping great products.
            Besides, I like to write about stuff related to web development,
            freelancing, and productivity.
          </p>
        </div>
        <Picture
          src="/images/portrait.png"
          alt="Konstantin Münster Portrait"
          height="22rem"
          width="20rem"
          emoji="👋"
          className="portrait"
        />
      </ContentWrapper>
      <ContentWrapper className="bookmarks">
        <Card
          background="secondary50"
          backgroundEmoji="secondary100"
          emoji="✍️"
          to="/blog"
        >
          <h5>Discover my blog.</h5>
          <p>I write monthly about React, Typescript, and freelancing.</p>
        </Card>
        <Card
          background="secondary50"
          backgroundEmoji="secondary100"
          emoji="👱‍♂️"
          to="/services"
        >
          <h5>Discover my services.</h5>
          <p>
            Discover my services and recent projects. And see how to get in
            touch best.
          </p>
        </Card>
      </ContentWrapper>
    </StyledSection>
  );
};
