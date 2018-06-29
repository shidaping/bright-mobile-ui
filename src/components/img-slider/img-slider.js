import React, { Component } from 'react';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class ImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.translateX = 0;
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  onTouchStart(e) {
    this.touchStart = e.touches[0];
    this.touchLast = e.touches[0];
  }
  onTouchMove(e) {
    let domThis = ReactDOM.findDOMNode(this);
    let domContent = domThis.querySelector('.content');
    domContent.style.transition = '';
    let gap = e.touches[0].screenX - this.touchLast.screenX;
    this.translateX = this.translateX + gap;
    // console.log(gap);
    domContent.style.transform = `translateX(${this.translateX}px)`;
    // console.log(domContent.style.transform);
    this.touchLast = e.touches[0];
  }
  onTouchEnd(e) {
    this.touchEnd=e.touches[0];
    let newIndex;
    if (this.touchEnd.screenX > this.touchStart.screenX && index<this.props.items.length - 1) {
      nexIndex = this.state.index
    }
  }
  // componentWillReceiveProps(nextProps) {

  // }
  render() {
    return (
      <div
        className={classnames('bmui-img-slider', {
          hide: this.props.show,
        })}
      >
        <div className="content">
          {this.props.items.map((item, i) => (
            <section
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd}
              key={i}
            >
              <img
                src={item.src}
                alt=""
              />
            </section>
          ))}
        </div>
      </div>
    );
  }
}

ImgSlider.propTypes = {
  show: PropTypes.bool,
  items: PropTypes.array,
};

ImgSlider.defaultProps = {
  show: false,
  items: [],
};

export default ImgSlider;
