import type { ReactNode, ReactElement } from 'react';

import { styled } from '@config/stitches.config';

const StyledPre = styled('pre', {
  $$yellow: '#E8BF6A',
  $$orange: '#e6ac7d',
  $$green: '#91bf76',
  $$grey: '#808080',
  $$purple: '#d1a6e8',
  $$blue: '#81b8e1',
  $$white: '#EAEAEA',

  padding: '1rem',
  fontFamily: '$mono',
  fontSize: '14px',
  lineHeight: '20px',
  whiteSpace: 'pre',
  backgroundColor: '#1a1a1a',
  color: '$$white',
  borderRadius: '$default',
  border: '2px solid transparent',
  transition: 'all 1s ease',

  '@lg': { width: '46rem', marginLeft: 'calc((46rem - 42rem) * -1 / 2)' },

  '&:hover': { borderColor: '$primary50' },

  '& code': { display: 'block' },
  '& code > div ': { paddingLeft: '1.75rem' },

  '.token.comment': { color: '$$grey' },

  '.token.plain-text': { color: 'white' },

  '.token.property, .token.script': { color: '$$orange' },

  '.token.string, .token.attr-value': { color: '$$green' },

  '.token.number, .token.unit, .token.color': { color: '$$blue' },

  '.token.attr-name, .token.attr-value > *, .token.script > *': {
    color: '$$white',
  },

  '.token.tag, .token.tag > .token.punctuation, .token.function': {
    color: '$$yellow',
  },

  '.token.keyword, .token.rule, .token.pseudo-class, .token.important, .token.module':
    {
      color: '$$purple',
    },

  '.highlight-line': {
    position: 'relative',

    '&::before': {
      content: 'attr(data-line)',
      position: 'absolute',
      left: -5,
      top: 0,
      color: '$subtext',
    },

    '&[data-highlighted="false"]': {
      opacity: 0.4,
    },
  },

  '.highlight-word': {
    background: '$primary500',
    padding: '0.125rem',
    borderRadius: '$less',
  },
});

type PreProps = {
  children?: ReactNode;
};

export const Pre = (props: PreProps): ReactElement => {
  return <StyledPre>{props.children}</StyledPre>;
};
