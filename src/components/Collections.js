import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CollectionCard from './CollectionCard.js'
import Box from '@mui/material/Box'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    maxWight:250,
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
          <Box style={styles.slide}><CollectionCard/></Box>
          <Box style={styles.slide}><CollectionCard/></Box>
          <Box style={styles.slide}><CollectionCard/></Box>
        </AutoPlaySwipeableViews>
    );
  }
}

export default Collections