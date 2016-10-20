// import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addRandomNumber} from 'actions';
import {getRandomNumbers} from 'reducers';
import renderer from './renderer';

function mapStateToProps(state) {
  const props = {
    randomList:getRandomNumbers(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {addRandomNumber};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(renderer);
