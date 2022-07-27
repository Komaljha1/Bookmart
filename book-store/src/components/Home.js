import { Button, Box, Typography, imageListClasses } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import imgFile from "../images/image.jpg";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <div className='container-fluid mx-0 px-0'>
      {/* <div className="templateContainer">
            <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="search here....." />
            </div> */}
        <img src={imgFile} className="w-100 img-fluid" alt='main-background-image' />

        {/* <Category/> */}
        {/* <button style={{ color: "black", position: "relative", top: "-2000px", left: "650px", bottom: "1000px" }}
          className='h3 btn btn-primary'>View All Products</button> */}
      </div>
    </>
  );
};

export default Home;