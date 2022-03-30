import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CollectionCard from './CollectionCard.js'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    maxWight:250
  }
};

class Collections extends React.Component {
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
          <div style={Object.assign({}, styles.slide)}><CollectionCard/></div>
          <div style={Object.assign({}, styles.slide)}><CollectionCard/></div>
          <div style={Object.assign({}, styles.slide)}><CollectionCard/></div>
        </AutoPlaySwipeableViews>
    );
  }
}

export default Collections