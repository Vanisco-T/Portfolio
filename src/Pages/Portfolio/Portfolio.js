import React, { useState } from 'react'
import './Portfolio.css'
import { Grid, Tabs,Tab, Card, CardActionArea, CardMedia, CardContent, Typography, Grow, Dialog, DialogTitle, DialogActions,DialogContent } from '@material-ui/core'
import ResumeData from '../../Utils/ResumeData'
const Portfolio = () => {
  const [tab,setTab]=useState('All')
  const [projectDialog,setProDiag]=useState(false) 
  const ProjectDialog =()=>(
    <Dialog open={projectDialog} onClose={()=>setProDiag(false)} className='projectDialog' >
      <DialogTitle onClose={()=>setProDiag(false)}>{projectDialog.title}</DialogTitle>
      <img src={projectDialog.image} alt='' className='projectDialog_image' />
      <DialogContent>
          <Typography className='projectDialog_description'>
          {projectDialog.description}
          </Typography>
      </DialogContent>
      <DialogActions className='projectDialog_actions'>
          {projectDialog?.links?.map(link => (
             <a href={link.link} target='_blank' className='projectDialog_icon' >{link.icon}</a>
          ))}
      </DialogActions>
    </Dialog>
  )
  return (
      <Grid container className='section  pb_45'>
        {/**Title */}
        <Grid item className='section_title mb_30' >
        <span></span>
        <h6  className='section_title_text'>Portfolio</h6>
        </Grid>
        {/**Tabs  */}
        <Grid item xs={12}>
          <Tabs 
          value={tab} 
          indicatorColor='white' 
          className='customTabs'
           onChange={(event,newValue)=>setTab(newValue)} 
          >
            <Tab label='All' value='All' className={tab == 'All'? 'customTabs_item active':'customTabs_item'}/>
            {[... new Set(ResumeData.portofolio.map(item => item.tag))].map(tag => (
              <Tab label={tag} value={tag} className={tab == tag? 'customTabs_item active':'customTabs_item'}  />
            ))}
          </Tabs>
        </Grid>
        {/**Project */}
        <Grid item xs={12}>
          <Grid container spacing={3} className={'p_30'} >
              {ResumeData.portofolio.map(project => (
                <>
                    {tab === project.tag || tab ==='All' ? (
                       <Grid item xs={12} sm={6} md={4} >
                       <Grow in timeout={1000}>
                           <Card className='customCard' onClick={()=>setProDiag(project)}>
                             <CardActionArea>
                               <CardMedia className='customCard_image' image={project.image} title={project.title} />
                               {console.log(project.image)}
                               <CardContent>
                                 <Typography className='customCard_title' variant='body2'>{project.title}</Typography>
                                 <Typography variant='body2' className='customCard_description' >{project.caption}</Typography>
                               </CardContent>
                             </CardActionArea>
                           </Card>
                       </Grow>
                     </Grid>
                    ) : null}
                   
                </>
              ))}
          </Grid>
        </Grid>
        <ProjectDialog/>
      </Grid>
  )
}

export default Portfolio