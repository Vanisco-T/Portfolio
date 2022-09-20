import './App.css';
import {Container ,Grid} from '@material-ui/core'
import Profile from './Component/Profile/Profile';
import Header from './Component/Header/Header'
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";function App() {
  return (
    <Container className='top_60'>
       <Grid container spacing={7}>
        <Grid item lg={3} md={4} xs={12} sm={12} >
          <Profile/>
        </Grid>
        <Grid item xs >
          <Router>
          <Header/>
          <div className='main-content container_shadow' >
          <Routes>
                <Route path='/portfolio' element={<Portfolio/>}></Route>
                <Route path='/' element={<Resume/>}></Route>
            </Routes>
          </div>
          </Router>
          <Footer/>
        </Grid>
       </Grid> 
    </Container>
     );
}

export default App;
