/*
This error happens because webpack doesn't support es6 modules

if you are using babel to transpile es6 code then use the default keyword like

require('./components/Hello').default
so the routes will be

const routes = [{
    path:"/",
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/Hello').default)
        })
    }
}];
see: http://stackoverflow.com/questions/36194806/invariant-violation-the-root-route-must-render-a-single-element-error-in-react
*/
const rootRoute = {
  path: '/',
  component: require('modules/example/components/main').default,  // eslint-disable-line global-require
  indexRoute: {
    component: require( // eslint-disable-line global-require
      'modules/example/pages/home' // eslint-disable-line
    ).default,
  },
  childRoutes: [
    {
      path: 'toast',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-toast' // eslint-disable-line
      ).default,
    },
    {
      path: 'loading',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-loading' // eslint-disable-line
      ).default,
    },
    {
      path: 'confirm',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-confirm' // eslint-disable-line
      ).default,
    },
    {
      path: 'form',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-form' // eslint-disable-line
      ).default,
    },
    {
      path: 'select',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-select' // eslint-disable-line
      ).default,
    },
    {
      path: 'date-picker',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-date-picker' // eslint-disable-line
      ).default,
    },
    {
      path: 'address-picker',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-address-picker' // eslint-disable-line
      ).default,
    },
    {
      path: 'check-box',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-check-box' // eslint-disable-line
      ).default,
    },
    {
      path: 'radio',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-radio' // eslint-disable-line
      ).default,
    },
    {
      path: 'switch',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-switch' // eslint-disable-line
      ).default,
    },
    {
      path: 'img-slider',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-img-slider' // eslint-disable-line
      ).default,
    },
    {
      path: 'list',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-list' // eslint-disable-line
      ).default,
    },
    {
      path: 'drawer',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-drawer' // eslint-disable-line
      ).default,
    },
    {
      path: 'pagination',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-pagination' // eslint-disable-line
      ).default,
    },
    {
      path: 'option-sheet',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-option-sheet' // eslint-disable-line
      ).default,
    },
    {
      path: 'stepper',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-stepper' // eslint-disable-line
      ).default,
    },
    {
      path: '*',
      component: require( // eslint-disable-line global-require
        'modules/error/components/not-found.js' // eslint-disable-line
      ).default,
    },
  ],
};

export default rootRoute;
