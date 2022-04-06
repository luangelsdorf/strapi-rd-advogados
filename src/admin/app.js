import horizontal from './extensions/logo-horizontal.svg';
import logo from './extensions/logo.svg';

export default {
  config: {
    locales: [
      'pt-BR',
    ],
    auth: {
      logo: horizontal
    },
    menu: {
      logo: logo
    },
    head: {
      favicon: logo
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};
