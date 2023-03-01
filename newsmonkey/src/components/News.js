import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container my-3 '>
        <h2>NewsMonkey - Top headline</h2>
        <div className="row">
          <div className="col-md-4">
        <NewsItems title="myTitle" description="myDesc" imageUrl="https://i.guim.co.uk/img/media/a824385b3bc6aca2b3c700437c055ea804dc053c/0_204_4303_2583/master/4303.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=901c8a99b0ec753163cba3988a84bc63"/>
          </div>
          <div className="col-md-4">
        <NewsItems title="myTitle" description="myDesc"/>
          </div>
          <div className="col-md-4">
        <NewsItems title="myTitle" description="myDesc"/>
          </div>
        </div>
  
      </div>
    )
  }
}

export default News
