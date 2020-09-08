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
  component: require('modules/example/components/main').default, // eslint-disable-line global-require
  indexRoute: {
    component: require(// eslint-disable-line global-require
    'modules/example/pages/home').default, // eslint-disable-line
  },
  childRoutes: [
    {
      path: 'toast',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-toast').default, // eslint-disable-line
    },
    {
      path: 'loading',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-loading').default, // eslint-disable-line
    },
    {
      path: 'confirm',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-confirm').default, // eslint-disable-line
    },
    {
      path: 'form',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-form').default, // eslint-disable-line
    },
    {
      path: 'select',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-select').default, // eslint-disable-line
    },
    {
      path: 'date-picker',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-date-picker').default, // eslint-disable-line
    },
    {
      path: 'address-picker',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-address-picker').default, // eslint-disable-line
    },
    {
      path: 'check-box',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-check-box').default, // eslint-disable-line
    },
    {
      path: 'radio',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-radio').default, // eslint-disable-line
    },
    {
      path: 'switch',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-switch').default, // eslint-disable-line
    },
    {
      path: 'img-slider',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-img-slider').default, // eslint-disable-line
    },
    {
      path: 'list',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-list').default, // eslint-disable-line
    },
    {
      path: 'drawer',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-drawer').default, // eslint-disable-line
    },
    {
      path: 'pagination',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-pagination').default, // eslint-disable-line
    },
    {
      path: 'option-sheet',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-option-sheet').default, // eslint-disable-line
    },
    {
      path: 'stepper',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-stepper').default, // eslint-disable-line
    },
    {
      path: 'tab',
      component: require(// eslint-disable-line global-require
      'modules/example/pages/page-tab').default, // eslint-disable-line
    },
    {
      path: '*',
      component: require(// eslint-disable-line global-require
      'modules/error/components/not-found.js').default, // eslint-disable-line
    },
  ],
};

export default rootRoute;
