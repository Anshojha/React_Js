import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        This is a newsComponent
        <NewsItems/>
      </div>
    )
  }
}

export default News
