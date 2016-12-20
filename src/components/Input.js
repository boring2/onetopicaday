import React from 'react';

class InputComponent extends React.Component {

  render() {
    return (
      <div className="input-idea">
        <textarea ref="ideacontent" rows="3" cols="20" placeholder="Input your idea">
        </textarea>
        <button onClick={this.addIdea.bind(this)}>Send</button>
      </div>
    );
  }

  addIdea() {
    const content = this.refs.ideacontent.value;
    this.props.addIdea(content);
    this.refs.ideacontent.value = '';
    // this.props.dispatch(addIdea(content))
  }
}

InputComponent.defaultProps = {

};

export default InputComponent;
