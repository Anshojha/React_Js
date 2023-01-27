// import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color , text ,onClick}) => {
 

  return     <button onClick={onClick}
   style={{backgroundColor:color}}
    className='btn'>{text}
   </button>

}


// const styling = {
//     backgroundColor : "Green",
//     color : 'black',
// }

Button.defaultProps = {
    color:'stealblue',
}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick:PropTypes.func,
}
export default Button
