import useSWR from 'swr';
import { Medium } from '@styled-icons/simple-icons';

import type { GetMediumFollowersResponse } from '@lib/api/medium/followers';
import { Profile, socialProfiles } from '@config/profiles.config';
import { styled } from '@config/stitches.config';
import { Link } from '@components/Link';
import { Skeleton } from '@components/Skeleton';
import { fetcher } from '@utils/fetcher';

const isMediumProfile = (profile: Profile) => profile.to.includes('medium.com');

const StyledMediumFollowers = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.5rem',
  fontSize: '$mini',
  lineHeight: '$mini',
  svg: { size: 18 },
});

export const MediumFollowers: React.FC = () => {
  const profile = socialProfiles.find(isMediumProfile);
  const user = profile?.to.split('@').pop();

  const { data, error } = useSWR<GetMediumFollowersResponse>(
    `/api/medium/followers?user=${user}`,
    fetcher
  );

  if (!profile || !data || error) return <Skeleton width={100} height={14} />;

  return (
    <StyledMediumFollowers to={profile.to} hideExternalHint>
      <Medium /> {data.followers} followers
    </StyledMediumFollowers>
  );
};
