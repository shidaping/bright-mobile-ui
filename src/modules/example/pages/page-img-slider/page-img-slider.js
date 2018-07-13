import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { ImgSlider } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/img-slider/img-slider.less';

// const items = [
//   {
//     src: require('./images/1.jpg'),
//     title: '',
//   },
//   {
//     src: require('./images/2.jpg'),
//     title: '',
//   },
//   {
//     src: require('./images/3.jpg'),
//     title: '',
//   },
//   {
//     src: require('./images/4.jpg'),
//     title: '',
//   },
//   {
//     src: require('./images/5.jpg'),
//     title: '',
//   },
// ];

const items = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg'),
  require('./images/4.jpg'),
  require('./images/5.jpg'),
];

class PageImgSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boolShow: false,
      value: '',
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div
        onClick={() => {
          this.setState({
            active: !this.state.active,
          });
        }}
      >
        <ImgSlider items={items} />
      </div>
    );
  }
}

export default PageImgSlider;
