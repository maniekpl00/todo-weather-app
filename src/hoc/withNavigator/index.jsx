import React, { Component } from 'react';

const withNavigator = WrappedComponent => {
  return class extends Component {
    getCurrentPosition = successCallback => {
      navigator.geolocation.getCurrentPosition(successCallback);
    };

    render() {
      const newProps = {
        ...this.props,
        getCurrentPosition: this.getCurrentPosition,
      };
      return <WrappedComponent {...newProps} />;
    }
  };
};

export default withNavigator;
