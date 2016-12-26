require('normalize.css/normalize.css')
require('styles/App.scss')

import { newRev, addContent } from '../actions'
import React from 'react'
import TopicComponent from './Topic'
import IdeaComponent from './Idea'
import InputComponent from './Input'
import TopicTabComponent from './TopicTab'
import RevTabComponent from './RevTab'
import appConfig from '../config/config'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelect: false
    }
    const { topics, params, location } = props
    this.pathname = params.topic || appConfig.pathname
    this.rev = location.query.rev || appConfig.rev
    this.topic = topics[this.pathname]
  }

  addContent(text) {
    const contentId = Date.now()
    const { rev, topic } = this
    const topicId = topic.id
    this.props.dispatch(addContent(topicId, 'boring', contentId, text, rev));
  }

  addRev(text) {
    const { location } = this.props
    const { rev, topic } = this
    const topicId = topic.id

    const selectContentId = AppComponent.defaultProps.selectIdea
    const revLength = Object.keys(topic.contentRef).length
    if (revLength >= 5) {
      alert('Your can\'t create a new rev, because it has 5 revs');
      return
    }
    const newVersion = `rev_${revLength+1}`
    this.props.dispatch(newRev(topicId, rev, selectContentId, newVersion))
    const contentId = Date.now();
    this.props.dispatch(addContent(topicId, 'boring', contentId, text, newVersion))
    location.query.rev = newVersion
    browserHistory.push(location);
  }

  selectIdea (contentId) {
    AppComponent.defaultProps.selectIdea = contentId
    this.setState({
      isSelect: true
    })
  }

  cancelSelectIdea () {
    this.setState({
      isSelect: false
    })
  }

  render() {
    let contentArr = []
    const { params, topics, location } = this.props
    const pathname = params.topic || appConfig.pathname
    const rev = location.query.rev || appConfig.rev
    const topic = topics[pathname]
    Object.assign(this, {pathname, rev, topic})

    const revs = Object.keys(topic.contentRef)

    if(topic.contentRef[rev]) {
      contentArr = topic.contentRef[rev]
    }
    return (
      <div className='content' onClick={this.cancelSelectIdea.bind(this)}>
        <TopicTabComponent activeTopicId={topic.id}/>
        <RevTabComponent revs={revs} activeRev={rev} pathname={pathname}/>
        <TopicComponent title={topic.title} />
        {
          contentArr.map((value, index) => {
            return <IdeaComponent selectIdea={this.selectIdea.bind(this)} contentId={value} value={topic.contents[value]['text']} key={index} />
          })
        }
        {
          this.state.isSelect ? <div style={{display:'block'}}><InputComponent style={{display:'block'}} addRev={this.addRev.bind(this)} addContent={this.addContent.bind(this)} /> </div>:<div style={{display:'none'}}> <InputComponent style={{display:'none'}} addRev={this.addRev.bind(this)} addContent={this.addContent.bind(this)} /></div>
        }

      </div>
    );
  }
}

function mapStateToProps (state) {
  return { topics: state }
}

AppComponent.defaultProps = {
  selectIdea: ''
}

AppComponent = connect(mapStateToProps)(AppComponent)

export default AppComponent
