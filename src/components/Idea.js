import React from 'react';

class IdeaComponent extends React.Component {
  render() {
    return (
      <div className="idea" onClick={this.clickHandle.bind(this)}>
        <p>{this.props.value}</p>
      </div>
    );
  }

  clickHandle (e) {
    e.stopPropagation();
    this.props.selectIdea(this.props.contentId)
  }
}

IdeaComponent.defaultProps = {
};

export default IdeaComponent;
