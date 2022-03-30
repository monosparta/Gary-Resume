import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import TimeCard from './MyselfCard.js'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}><TimeCard/></div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}><TimeCard/></div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}><TimeCard/></div>
        </AutoPlaySwipeableViews>
    );
  }
}

export default DemoAutoPlay