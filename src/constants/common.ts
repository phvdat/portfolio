import { RoutePath } from './routes';
interface IMenu {
  label: string;
  url: string;
}

export const ICON_SIZE = {
  sm: 24,
  md: 32
};

export const MENU: IMenu[] = [
  {
    label: 'HOME',
    url: RoutePath.Home
  },
  {
    label: 'FEATURES',
    url: RoutePath.Features
  },
  {
    label: 'RESUME',
    url: RoutePath.Resume
  },
  {
    label: 'BLOG',
    url: RoutePath.Blog
  },
  {
    label: 'CONTACTS',
    url: RoutePath.Contact
  }
];

export const NAME = 'Pham Van Dat';
export const EMAIL = 'Phamvandat.hcmut@gmail.com';
