import React from 'react';

class IdeaComponent extends React.Component {
  render() {
    return (
      <div className="idea">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

IdeaComponent.defaultProps = {
};

export default IdeaComponent;
