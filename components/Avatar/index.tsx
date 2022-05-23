import Image from 'next/image';

import { styled } from '@config/stitches.config';

const StyledAvatar = styled('div', {
  display: 'flex',
  img: { borderRadius: '$round' },
});

type AvatarProps = {
  size?: number;
};

export const Avatar: React.FC<AvatarProps> = props => {
  return (
    <StyledAvatar>
      <Image
        src={'/images/avatar.jpg'}
        alt="Konstantin Münster Avatar"
        height={props.size ?? 40}
        width={props.size ?? 40}
      />
    </StyledAvatar>
  );
};
