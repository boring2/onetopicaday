import React from 'react'

class TopicComponent extends React.Component {
  render() {
    return (
      <div className="topic">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}


TopicComponent.defaultProps = {
};

export default TopicComponent;
