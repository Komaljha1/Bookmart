import { Button , Box, Typography, imageListClasses } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import img  from "../images/image.jpg";

const Home = () => {
  return <div className='mb-n5'>
    
      <img src={img} className="w-100 img-fluid" alt='main-background-image'/>
        <div className="container">
           <div style={ {lineHeight:10 , backgroundcolor:black}}>view</div>
        </div>
        <button style={{position:"relative",top:"-2000px", left:"650px" , bottom:"1000px"}} className='h3 btn btn-primary'>View All Products</button>
    {/* <Box display='flex' flexDirection="column" alignItems="centre" paddingLeft={45} paddingRight={45} borderRadius={20} >
      <Button sx={{marginTop:15 }} variant="contained">
        <Typography variant='h3'>View All Products </Typography>
      </Button>
    </Box> */}
  </div>
};

export default Home;