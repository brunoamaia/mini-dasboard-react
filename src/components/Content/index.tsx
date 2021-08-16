import React from 'react'
import { connect } from 'react-redux'

import Frame from './Frame'
import { Home } from './Home'

import '../../styles/content.css'

interface MyProps {
  pageContent: {
    page: string
  }
}

class Content extends React.Component<MyProps> {
  render() {
    const { page } = this.props.pageContent
    return (
      <article>
        {(page === 'home') ?
          <Home /> : <Frame sportName={page} />
        }
      </article>
    )
  }
}

const mapStateToProps = ((state: { pageContent: any; }) => ({
  pageContent: state.pageContent
}))

export default connect(
  mapStateToProps
)(Content)
