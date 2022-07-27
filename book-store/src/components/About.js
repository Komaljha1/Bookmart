import React from 'react';
// import { Card, Button } from '@mui/material';
const abt_book = new URL("../images/abt_book.jpg", import.meta.url)
const About = () => {
  return (
    <>
      <h1 className="text-center text-info">Get To Know Book Shop Online</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-2 mx-2 mb-2 my-2">
          <div className="col-md-6">
            <img src={abt_book} />
          </div>
          <div className="col-md-6">
            <p>Buy Books Online at BN.com, America’s Favorite Bookstore
              No matter what you’re a fan of, from Fiction to Biography, Sci-Fi, Mystery, YA, Manga, and more, Barnes & Noble has the perfect book for you. Shop bestselling books from the NY Times Bestsellers list, or get personalized recommendations to find something new and unique! Discover kids books for children of all ages including classics like Dr. Seuss to modern favorites like the Dog Man series.


              Find a Barnes & Noble Bookstore Near Me
              Barnes & Noble has over 600 stores throughout the United States. Find a bookstore near you using our store locator. You can also find information on curbside pickup, store events (and virtual events), store hours, Barnes & Noble Café menus and more.
              <hr />
              eBooks Delivered Straight to your NOOK Device or Mobile NOOK App.
              Reading on the go has never been easier with our convenient NOOK eReaders and tablets.
              Download eBooks and read them on our free NOOK app for both Apple and Android devices. 
              <hr />
              Buy Audiobooks and Listen Anytime, Anywhere with our B&N NOOK App.
              Listening to audiobooks has never been better with B&N Audiobooks. Subscribe today and get started with your free audiobook or purchase books anytime without a subscription. Browse over 300,000 new releases, bestsellers, classics and more! Discover the best audiobooks to listen to now, while you’re driving, walking, or for your next family road trip. Listen to audiobooks read by your favorite authors or popular celebrity narrators anytime, anywhere on the free Barnes & Noble NOOK App.
              <hr />
              Your Destination for Movies, Music, Toys and More!
              We’re more than just a bookstore; find all of the best toys, puzzles, music, movies and collectibles at Barnes & Noble. From popular LEGO sets to the latest board games, we carry a wide selection of toys for the entire family. Music fans can enjoy our vinyl store including best-selling records, turntables, and B&N exclusive vinyl, while movie and TV fans can find all their favorites including boxed sets of the latest TV series, classics and new releases on Blu-Ray, or a variety of the greatest movies from around the world in the Criterion collection.
              <hr />
              Become a Barnes & Noble Member for Exclusive Deals and Free Shipping Online.
              You love reading? We do too! Sign up to become a Barnes & Noble member for exclusive in-store discounts, free shipping, and more.
            </p>

          </div>
        </div>
      </div>

      {/* // <div className="container-fluid bg-light p-3 m-3">
    //   <div className="row">
    //     <div className="col-4 bg-danger">1234</div>
       
    //     <div className="col-4 bg-warning">5678</div>
    //     <div className><img src={abt_book} /></div>
    //   </div>
    // </div>

    // <div className="container-fluid mx-0 px-0">
    //   <h1>TEST</h1>
    //   <div className='row'>
    //     <div className='col-6'>
    //       <div className="card" style={{width: "18rem"}}>
    //         <img src="..." className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='col-6'>
    //       <div className="card" style={{width: "18rem"}}>
    //         <img src="..." className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}

    </>
  );
};

export default About;