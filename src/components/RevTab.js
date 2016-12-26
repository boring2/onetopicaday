import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

class RevTab extends React.Component {
  render () {
    const { revs, pathname } = this.props
    console.log(this.props)
    return (
      <div>
        {
          revs.map((rev)=>{return <Link key={rev} to={{ pathname: pathname, query: { rev } }}>{rev}</Link>})
        }
      </div>
    )
  }
}

export default RevTab