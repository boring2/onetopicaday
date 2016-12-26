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

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  addContent(text) {
    const contentId = Date.now()
    const { topics, params, location } = this.props
    const pathname = params.topic || appConfig.pathname
    const rev = location.query.rev || appConfig.rev
    const topicId = topics[pathname].id
    this.props.dispatch(addContent(topicId, 'boring', contentId, text, rev));
  }

  addRev(text) {
    const { topics, params, location } = this.props
    const pathname = params.topic || appConfig.pathname
    const rev = location.query.rev || appConfig.rev
    const topic = topics[pathname]
    const topicId = topic.id

    const selectContentId = AppComponent.defaultProps.selectIdea
    const revLength = Object.keys(topic.contentRef).length
    if (revLength >= 5) {
      alert('Your can\'t create a new rev, because it has 5 revs');
      return
    }
    this.props.dispatch(newRev(topicId, rev, selectContentId, `rev_${revLength+1}` ))
    const contentId = Date.now();
    this.props.dispatch(addContent(topicId, 'boring', contentId, text, `rev_${revLength+1}`));
  }

  selectIdea (contentId) {
    AppComponent.defaultProps.selectIdea = contentId
  }

  render() {
    let contentArr = []
    const { params, topics, location } = this.props
    console.log(this.props.params)
    console.log(appConfig)
    const pathname = params.topic || appConfig.pathname
    const rev = location.query.rev || appConfig.rev
    const topic = topics[pathname]
    const revs = Object.keys(topic.contentRef)
    if(topic.contentRef[rev]) {
      contentArr = topic.contentRef[rev]
    }
    return (
      <div>
        <TopicTabComponent />
        <RevTabComponent revs={revs} pathname={pathname}/>
        <TopicComponent title={topic.title} />
        {
          contentArr.map((value, index) => {
            return <IdeaComponent selectIdea={this.selectIdea.bind(this)} contentId={value} value={topic.contents[value]['text']} key={index} />
          })
        }
        <InputComponent addRev={this.addRev.bind(this)} addContent={this.addContent.bind(this)} />
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
