import React, { useEffect, useState } from "react";

const Footer = (props) => {
    return (
        <>
<div class="container-fluid  bg-dark container-fluid text-white">

    <footer class="text-center text-lg-start border border-whitept-3" >
    <div class="container p-2">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 max-width: 100%">
          <h5 class="text-uppercase mb-4">We Are Social</h5>

          <li class="list-unstyled mb-10 ">
            <ul>
              <a href="https://www.linkedin.com/in/thekomaljha/" class="text-white">Facebook</a>
            </ul>
            <ul>
              <a href="https://www.linkedin.com/in/thekomaljha/" class="text-white">linkedIn</a>
            </ul>
            <ul>
              <a href="https://www.linkedin.com/in/thekomaljha/" class="text-white">Instagram</a>
            </ul>
          </li>
        </div>
        

        {/* <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4">Assistance</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Contact us</a>
            </li>
            <li>
              <a href="#!" class="text-white">Size Guide</a>
            </li>
            <li>
              <a href="#!" class="text-white">Shipping Information</a>
            </li>
            <li>
              <a href="#!" class="text-white">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#!" class="text-white">Payment</a>
            </li>
          </ul>
        </div> */}

        {/* <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4">Careers</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Jobs</a>
            </li>
          </ul>
        </div> */}

        {/* <div class="col-lg-4 col-md-6 mb-5 mb-lg-0" >
          <h5 class="text-uppercase mb-4">Sign up to our newsletter</h5>

          <div class="form-outline form-white mb-4">
            <input type="email" id="form5Example2" class="form-control" />
            <label class="form-label" for="form5Example2">Email address</label>
          </div>

          <button type="submit" class="btn btn-outline-white btn-block">Subscribe</button>
        </div> */}
      </div>
    </div>

    <div class="text-center p-3 border-top border-white">
      © 2022 Copyright:
      <a class="text-white" href="https://www.linkedin.com/in/thekomaljha/">Komal Jha . All rights reserved</a>
    </div>
  
  </footer>
  
</div>
        </>
    );
};

export default Footer;
