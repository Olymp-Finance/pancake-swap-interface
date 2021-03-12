import { MenuEntry } from '@olymp-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://olymp.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://olymp.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://olymp.finance/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://olymp.finance/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://olymp.finance/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://olymp.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://olymp.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://olymp.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://olymp.info',
      },
      {
        label: 'Tokens',
        href: 'https://olymp.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://olymp.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://olymp.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://olymp.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.olymp.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/olymp',
      },
      {
        label: 'Docs',
        href: 'https://docs.olymp.finance',
      },
      {
        label: 'Blog',
        href: 'https://olymp.medium.com',
      },
    ],
  },
]

export default config
