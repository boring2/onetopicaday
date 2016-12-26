import React from 'react';

class InputComponent extends React.Component {
  render() {
    const { isSelect } = this.props
    return (
      <div className="input-idea">
        <textarea onClick={(e)=>{e.stopPropagation()}} ref="ideacontent" rows="3" cols="20" placeholder="Input your idea">
        </textarea>
        <button onClick={this.addContent.bind(this)}>Continue</button>
        <button className = {isSelect ? 'select' : 'unselect'} onClick={this.addRev.bind(this)}>Add New Rev</button>
      </div>
    );
  }

  addContent() {
    const content = this.refs.ideacontent.value
    this.props.addContent(content)
    this.refs.ideacontent.value = ''
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
