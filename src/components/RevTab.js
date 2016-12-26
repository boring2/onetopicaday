import React from 'react'
import { Link } from 'react-router';

class RevTab extends React.Component {
  render () {
    const { revs, pathname, activeRev } = this.props
    return (
      <div>
        {
          revs.map((rev)=>{
            return <span key={rev} className={activeRev === rev ? 'rev-link active' : 'rev-link'}>
                    <Link to={{ pathname: pathname, query: { rev } }}>{rev}</Link>
                   </span>})
        }
      </div>
    )
  }
}

export default RevTab