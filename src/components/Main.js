require('normalize.css/normalize.css');
require('styles/App.scss');

import { addIdea } from '../actions/addIdea';
import React from 'react';
import TopicComponent from './Topic';
import IdeaComponent from './Idea';
import InputComponent from './Input';
import { connect } from 'react-redux'

class AppComponent extends React.Component {

  addIdea(idea) {
    this.props.dispatch(addIdea(idea));
  }

  render() {
    return (
      <div>
        <TopicComponent />
        {
          this.props.ideas.map((value, index) => {return <IdeaComponent value={value} key={index} />})
        }
        <InputComponent addIdea={this.addIdea.bind(this)} />
      </div>
    );
  }
}

function getProp (state) {
  return state;
}

AppComponent = connect(getProp)(AppComponent);

AppComponent.defaultProps = {
};

export default AppComponent;
