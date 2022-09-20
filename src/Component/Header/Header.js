import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Nav,Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { HomeRounded,Telegram } from '@material-ui/icons';
import ResumeData from '../../Utils/ResumeData';
import CustomButton from '../Button/Button';
const Header = (props) => {
  const pathName = props?.location?.pathname
  const url =ResumeData.socials.Telegram.link
  return (
<Navbar expand="lg" sticky='top' className='header'>
  {/*Home Link*/}
       <Nav.Link as={NavLink} to='/'className='header_navlink'>
          <Navbar.Brand className='header_home'>
            <HomeRounded/>
          </Navbar.Brand>
       </Nav.Link> 

       <Navbar.Toggle/>
       <Navbar.Collapse>
        <Nav className='header_left'>
          {/**Resume Link */}
          <Nav.Link
           as={NavLink} to='/'
            className={pathName === '/' ? 'header_link_active':'header_link'}
            >
              Resume
          </Nav.Link>
          {/**Portofolio Link */}
          <Nav.Link
           as={NavLink} to='/portfolio'
            className={pathName === '/portfolio' ? 'header_link_active':'header_link'}
            >
              Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
            {Object.keys(ResumeData.socials).map((key)=>(
              <a href={ResumeData.socials[key].link} target='_blank'>{ResumeData.socials[key].icon}</a>
            ))}
           <div onClick={() => window.open(url, '_blank')} >
            <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
            </div>
        </div>
       </Navbar.Collapse>
</Navbar> 
     )
}

export default Header