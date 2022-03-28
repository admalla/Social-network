import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForNavigate = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthNavigate = (Component) => {
  class ComponentNavigate extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let connectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(ComponentNavigate);
  return connectedAuthNavigateComponent;
};
