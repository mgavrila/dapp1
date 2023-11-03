import { Home } from './components/Home';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
export const routes = [
  {
    name: 'Home',
    href: '/dapp1',
    component: Home
  },
  {
    name: 'Page1',
    href: '/dapp1/page1',
    component: Page1
  },
  {
    name: 'Page2',
    href: '/dapp1/page2',
    component: Page2
  }
];
