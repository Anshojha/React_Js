// import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title,onAdd,showAdd}) => {

  return (
    <header>
      <h1 >{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={ showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  ) 
}


Header.defaultProps  = {
  title :"Task Tracker",

}

Header.protoTypes = {
  title : PropTypes.string.isRequired,
}


// CSS in Js
// const headingStyle = {
//   color:"red" , backgroundColor :"pink"
// }


export default Header
