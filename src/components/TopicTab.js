import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

class TopicTab extends React.Component {
  render () {
    const { topics } = this.props
    console.log(this.props)
    return (
      <div>
        {
          Object.keys(topics).map((v)=>{return <Link key={v} to={{ pathname: v, query: {rev: "rev_1"} }}>{v}</Link>})
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