import React from 'react'
import './Button.css'
import {Button} from '@material-ui/core'
const CustomButton = ({text,icon}) => {
  return (
    <Button 
    className='custom_button' 
    endIcon={icon ? (<div className='icon_container'>{icon}</div>):null} 
    ><span className='btn_text'>{text}</span></Button>
    )
}

export default CustomButton