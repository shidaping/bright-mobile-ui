import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


class ImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      transition: true,
      big: false,
    };
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  onTouchStart(e) {
    this.touchStartX = e.touches[0] ? e.touches[0].pageX : 0;
    // e.preventDefault();
  }
  onTouchMove(e) {
    // let domThis = ReactDOM.findDOMNode(this);
    // let domContent = domThis.querySelector('.content');
    // domContent.style.transition = '';
    // let gap = e.touches[0].screenX - this.touchLast.screenX;
    // this.translateX = this.translateX + gap;
    // // console.log(gap);
    // domContent.style.transform = `translateX(${this.translateX}px)`;
    // // console.log(domContent.style.transform);
    // this.touchLast = e.touches[0];
    // e.preventDefault();
  }
  onTouchEnd(e) {
    this.touchEndX = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
    const deltaX = this.touchEndX - this.touchStartX;
    // let newIndex = this.state.index;
    // console.log(deltaX, "++++++++");

    // if (this.touchEnd.screenX > this.touchStart.screenX && index<this.props.items.length - 1) {
    //   nexIndex = this.state.index;
    // }


    // const reset = () => {
    //   if (this.state.index === 0) {
    //     this.setState({
    //       transition: false,
    //     }, () => {
    //       setTimeout(() => {
    //         this.setState({
    //           index: this.props.items.length,
    //         });
    //       }, 50);
    //     });
    //   }

    //   if (this.state.index === this.props.items.length + 1) {
    //     this.setState({
    //       transition: false,
    //     }, () => {
    //       setTimeout(() => {
    //         this.setState({
    //           index: 1,
    //         });
    //       }, 50);
    //     });
    //   }
    // };

    if (deltaX > 30 && this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
    if (deltaX < -30 && this.state.index < this.props.items.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    }

    // 向左
    // if (deltaX > 50) {
    //   this.setState({
    //     transition: true,
    //   }, () => {
    //     this.setState({
    //       index: newIndex - 1,
    //     }, () => {
    //       setTimeout(reset, 600);
    //     });
    //   });
    // }

    // 向右
  //   if (deltaX < -50) {
  //     this.setState({
  //       transition: true,
  //     }, () => {
  //       this.setState({
  //         index: newIndex + 1,
  //       }, () => {
  //         setTimeout(reset, 600);
  //       });
  //     });

  //   }
  }
  // componentWillReceiveProps(nextProps) {

  // }
  render() {
    return (
      <div
        className={classnames('bmui-img-slider', {
          hide: this.props.show,
          big: this.state.big,
        })}
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
      >
        <div
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          className="content"
          style={{
            transform: `translateX(-${100 * this.state.index}%)`,
            // transition: this.state.transition ? this.transition
            transition: this.state.transition ? 'all .5s ease' : null,
          }}
        >
          {/*
          <section>
            <img src={this.props.items[this.props.items.length - 1].src} alt="" />
          </section>
          */}
          {this.props.items.map((item, i) => (
            <section
              onClick={(e) => {
                this.props.onItemClick(item, e);
              }}
              key={i}
            >
              <img
                onClick={(e) => {
                  if (this.props.big) {
                    this.setState({
                      big: !this.state.big,
                    });
                  }

                  if (this.props.disableImgClick) {
                    e.preventDefault();
                  }
                }}
                src={item}
                alt=""
              />
            </section>
          ))}
          {/*
          <section>
            <img src={this.props.items[0].src} alt="" />
          </section>
          */}
        </div>
        {this.props.showBubble ? (
          <ul className="bubble-list clearfix">
            {this.props.items.map((item, i) => (
              <li
                className={classnames('pull-left', {
                  active: this.state.index === i,
                })}
                key={i}
              />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

ImgSlider.propTypes = {
  show: PropTypes.bool,
  items: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  onItemClick: PropTypes.func,
  theme: PropTypes.string,
  showBubble: PropTypes.bool,
  disableImgClick: PropTypes.bool,
  big: PropTypes.bool,
};

ImgSlider.defaultProps = {
  show: false,
  items: [],
  width: '100vw',
  height: '50vw',
  theme: 'orange',
  onItemClick: () => {},
  showBubble: true,
  disableImgClick: false,
  big: true,

};

export default ImgSlider;
