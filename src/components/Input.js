import React from 'react';

class InputComponent extends React.Component {

  render() {
    return (
      <div className="input-idea">
        <textarea ref="ideacontent" rows="3" cols="20" placeholder="Input your idea">
        </textarea>
        <button onClick={this.addContent.bind(this)}>Continue</button>
        <button onClick={this.addRev.bind(this)}>Add New Rev</button>
      </div>
    );
  }

  addContent() {
    const content = this.refs.ideacontent.value
    this.props.addContent(content)
    this.refs.ideacontent.value = ''
    // this.props.dispatch(addIdea(content))
  }

  addRev() {
    const content = this.refs.ideacontent.value;
    this.props.addRev(content)
    this.refs.ideacontent.value = ''
  }
}

InputComponent.defaultProps = {

};

export default InputComponent;
