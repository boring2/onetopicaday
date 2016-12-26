import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

class TopicTab extends React.Component {
  render () {
    const { topics, activeTopicId } = this.props
    return (
      <div>
        {
          Object.keys(topics).map((topicId)=>{
            return <span key={topicId} className={topicId === `topic_${activeTopicId}` ? 'topic-link active' : 'topic-link'}>
                    <Link to={{ pathname: topicId, query: {rev: 'rev_1'} }}>{topicId}</Link>
                   </span>
                  })
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { topics: state }
}

TopicTab = connect(mapStateToProps)(TopicTab)


export default TopicTab