// console.error('aaaaaaaaaaaa');
// module.exports = {
//   plugins: {
//     autoprefixer: {
//       remove: false,
//       browsers: [
//         'last 3 versions',
//         'ie >= 9',
//         'ie_mob >= 10',
//         'ff >= 30',
//         'chrome >= 34',
//         'safari >= 6',
//         'opera >= 12.1',
//         'ios >= 6',
//         'android >= 4.4',
//         'bb >= 10',
//         'and_uc 9.9',
//       ],
//     },
//   },
// };
module.exports = {
  parser: 'postcss-comment-2',
  plugins: [
    require('autoprefixer')(),
  ],
};
