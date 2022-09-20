import { Typography } from '@material-ui/core'
import React from 'react'
import ResumeData from '../../Utils/ResumeData'
import './Footer.css'
import  Copyright  from '@material-ui/icons/Copyright'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{ResumeData.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
         <Copyright/> 2020 Designed and Developed by <a href='/' target='_blank'>{ResumeData.name}</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer