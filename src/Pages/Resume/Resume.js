import React from 'react'
import './Resume.css'
import ResumeData from '../../Utils/ResumeData'
import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import CustomTimeline from '../../Component/TimeLine/TimeLine'
import WorkIcon from '@material-ui/icons/Work'
import { School } from '@material-ui/icons'
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab'
const Resume = () => {
  return (
    <>
    {/**About Me */}
    <Grid container className='section pb_45'>
      <Grid item className='section_title mb_30' >
        <span></span>
        <h6  className='section_title_text'>About Me</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' className='aboutme_text'>{ResumeData.about}</Typography>
      </Grid>
    </Grid>
    {/**Education and expirience */}
    <Grid container className='section pb_45' >
      <Grid item className='section_title mb_30' >
        <span></span>
        <h6  className='section_title_text'>Resume</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container className='resume_timeline'>
          {/**Expiriences */}
          <Grid item sm={12} md={6}>
            <CustomTimeline title='Working Experiences' icon={<WorkIcon/>} >
              {ResumeData.experiences.map((key)=>(
               <TimelineItem>
                <TimelineSeparator className='seperator_padding'>
                  <TimelineDot variant='outline' className='timeline_dot'/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent className='timeline_content'>
                  <Typography className='timeline_title'>{key.title}</Typography>
                  <Typography variant='caption' className='timeline_date'>{key.date}</Typography>
                  <Typography variaant='body2' className='timeline_description'>{key.description}</Typography>
                </TimelineContent>
               </TimelineItem> 
              ))}
            </CustomTimeline>
          </Grid>
          {/**Education */}
          <Grid item sm={12} md={6}>
            <CustomTimeline title='Education' icon={<School/>} >
              {ResumeData.education.map((key)=>(
               <TimelineItem>
                <TimelineSeparator className='seperator_padding'>
                  <TimelineDot variant='outline' className='timeline_dot'/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent className='timeline_content'>
                  <Typography className='timeline_title'>{key.title}</Typography>
                  <Typography variant='caption' className='timeline_date'>{key.date}</Typography>
                  <Typography variaant='body2' className='timeline_description'>{key.description}</Typography>
                </TimelineContent>
               </TimelineItem> 
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/**Services */}
    <Grid container spacing={4} justify='space-between' className='section pb_45'>
      <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} justify='space-around' >
          {ResumeData.services.map((service)=>(
            <Grid item xs={12} sm={6} md={3}>
              <div className='service'>
                <Icon className='service_icon'>{service.icon}</Icon>
                <Typography  className='service_title' variant='h6'>{service.title}</Typography>
                <Typography className='service_description' variant='body2' >{service.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    {/**Skills */}
    <Grid container className='section graybg pb_45 p_50'>
      {ResumeData.skills.map((skill)=>(
        <Grid item xs={12} sm={6} md={2}>
          <Paper elevation={2} className='skill'>
            <Typography variant='h6' className='skill_title'>
                {skill.title}
            </Typography>
            {skill.description.map((desc)=>(
              <Typography variant='body2' className='skill_description'>
                <TimelineDot variant='outlined' className='timeline_dot'></TimelineDot>
                {desc}
              </Typography>
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
    {/**Contact */}
    
    </>
    )
}

export default Resume