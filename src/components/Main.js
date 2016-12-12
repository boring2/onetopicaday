require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import TopicComponent from './Topic';
import IdeaComponent from './Idea';
import InputComponent from './Input';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: ['aaaaaa', 'bbbbb']
    };
  }

  addIdea(idea) {
    this.state.ideas.push(idea);
    this.setState({
      ideas: this.state.ideas
    })
  }

  render() {
    const ideasList = [];
    this.state.ideas.forEach(function(value, index){
      ideasList.push(<IdeaComponent value={value} key={index} />);
    });
    return (
      <div>
        <TopicComponent />
        { ideasList }
        <InputComponent addIdea={this.addIdea.bind(this)} />
      </div>
    );
  }


}

AppComponent.defaultProps = {
};

export default AppComponent;
