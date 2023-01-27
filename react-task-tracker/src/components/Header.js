// import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
const onClick = ()=>{
  console.log('Click')
}
  return (
    <header>
      <h1 >{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
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
