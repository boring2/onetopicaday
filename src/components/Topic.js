import React from 'react';

class TopicComponent extends React.Component {
  render() {
    return (
      <div className="topic">
        <h1>我是今日话题.</h1>
      </div>
    );
  }
}

TopicComponent.defaultProps = {
};

export default TopicComponent;
