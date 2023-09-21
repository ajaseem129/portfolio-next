import type { SvgProps } from '@components/Icon';
import { LinkedInSvg } from '@components/Icon/LinkedIn';
import { GithubSvg } from '@components/Icon/Github';
import { DiscordSvg } from '@components/Icon/Discord';

export type Profile = {
  to: string;
  label: string;
  icon?: React.FC<SvgProps>;
};

export const TwitterHandle = '@kmuenster';

export const socialProfiles: Profile[] = [
  {
    to: 'https://www.linkedin.com/in/abdul-j-820591118/',
    label: 'LinkedIn',
    icon: LinkedInSvg,
  },
  {
    to: 'https://github.com/ajaseem129/',
    label: 'Github',
    icon: GithubSvg,
  },
  {
    to: 'https://discord.gg/Mh9WBdnmDv',
    label: 'Discord',
    icon: DiscordSvg,
  },
  // {
  //   to: 'https://medium.com/@konstantinmuenster',
  //   label: 'Medium',
  //   icon: MediumSvg,
  // },
  {
    to: 'mailto:drakknightmc@gmail.com',
    label: 'Email',
  },
];
