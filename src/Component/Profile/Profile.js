import React from 'react'
import { Typography } from '@material-ui/core'
import './Profile.css'
import Image from '../../Asset/Images/me.jpg'
import CustomTimeline,{CustomTimelineSeperator} from '../TimeLine/TimeLine'
import ResumeData from '../../Utils/ResumeData'
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent'
import CustomButton from '../Button/Button'
import Download from '@material-ui/icons/GetApp'

const CustomTimelineItem =({title,text,link})=>(
  <TimelineItem>
    <CustomTimelineSeperator/>
    <TimelineContent className='timeline_content'>
      {
      link ? 
         (
          <Typography className='timelineItem_text'>
             <span>{title}</span> <a href={link} target='_blank' rel="noreferrer">{text}</a>
          </Typography>
          )
          :
          (
          <Typography className='timelineItem_text'>
            <span>{title}</span>{text}
          </Typography>
          )
      }
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'cv.pdf';
            alink.click();
        })
    })
}
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
      <Typography className='name'>{ResumeData.name}</Typography>
      <Typography className='title'>{ResumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={Image} alt=''/>
      </figure>
      <div className='profile_info'>
        <CustomTimeline icon={<PersonIcon/>}>
        <CustomTimelineItem title='Name: ' text={ResumeData.name} />
        <CustomTimelineItem title='Email: ' text={ResumeData.email} />
        {Object.keys(ResumeData.socials).map((key) =>(
          <CustomTimelineItem 
          title={key} 
          text={ResumeData.socials[key].text} 
          link={ResumeData.socials[key].link} 
          />
        ))}
        </CustomTimeline>
       <div style={{textAlign:'center'}} onClick={onButtonClick}>
       <CustomButton text={'Download CV'} icon={<Download/>}  />
       </div>
      </div>
    </div>
  )
}

export default Profile