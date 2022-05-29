import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import Image from 'next/image';

import { styled } from '@config/stitches.config';
import { Emoji } from '@components/Emoji';

const StyledSinglePicture = styled('figure', {
  '.image-wrapper': {
    position: 'relative',
    '> [data-emoji]': {
      display: 'none',
      position: 'absolute',
      zIndex: 1,
      top: -10,
      left: -30,

      '@md': { display: 'block' },
    },

    img: {
      transition: 'all 1s ease',
      borderRadius: '$default',
      border: '2px solid $surface100 !important',
    },
  },
});

export type SinglePictureProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  caption?: string;
  objectFit?: CSSProperties['objectFit'];
  emoji?:
    | string
    | {
        type: string;
        position?: { top?: number; left?: number };
      };
} & ComponentPropsWithoutRef<'div'>;

export const SinglePicture: React.FC<SinglePictureProps> = ({
  src,
  alt,
  width,
  height,
  emoji,
  caption,
  objectFit,
  ...props
}) => {
  const isEmojiObject = typeof emoji !== 'string';

  return (
    <StyledSinglePicture {...props}>
      <div className="image-wrapper" style={{ width, height }}>
        {emoji ? (
          <Emoji
            type={isEmojiObject ? emoji.type : emoji}
            style={emoji && isEmojiObject ? emoji.position : {}}
            background="surface100"
          />
        ) : undefined}
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit={objectFit ?? 'cover'}
        />
      </div>
      {caption ? (
        <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
      ) : undefined}
    </StyledSinglePicture>
  );
};
