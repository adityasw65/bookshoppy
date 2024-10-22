import { useEffect, useState } from "react";
import heroImage from "./images/author-book-store-audio-book-img-4.jpg";
import flogo1 from "./images/featured-logo1.svg";
import flogo3 from "./images/featured-logo3.svg";
import flogo4 from "./images/featured-logo4.svg";
import flogo5 from "./images/featured-logo5.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import AOS from "aos";
import "aos/dist/aos.css"

import axios from 'axios';

function Home(props) {

   useEffect(() => {
      AOS.init();
   })

   const [booksDetails, setDetails] = useState([]);

   const showBooks = () => {
      alert("Wait for 2 to 3 seconds, Data is fetching from API call...");
      const options = {
         method: 'GET',
         url: 'https://freebooks-api2.p.rapidapi.com/fetchEbooks/horror/2',
         headers: {
           'x-rapidapi-key': '4f4e00b77cmsh62d3d37faec8b63p12d69fjsnd2fd33ff2792',
           'x-rapidapi-host': 'freebooks-api2.p.rapidapi.com'
         }
       };

      axios.request(options).then((result) => {
         console.log(result.data);
         setDetails(result.data);
      }).catch((error) => {
         console.log(error);
      })
   }


   return (

      <div className="container-fluid g-0" style={{ overflow: "hidden" }}>

         {/* ------------------- home start ------------------- */}
         <div className="container-fluid position-relative" id="home">
            <div className="row g-0">
               <div className="col-12 col-md-6" >
                  <h1 data-aos="fade-down" data-aos-duration="1500">This Dark Road to Mercy</h1>
                  <p data-aos="fade-right" data-aos-duration="1500">
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
               </div>
               <div className="col-12 col-md-6" id="imageHero">
                  <img src={heroImage} alt="image not found" className="img-fluid rounded" data-aos="fade-left" data-aos-duration="1500" />
               </div>
            </div>
         </div>
         {/* ------------------- home end ------------------- */}



         {/* ------------------- featured start ------------------- */}
         <div className="container-fluid" id="featured">
            <div className="row text-center">
               <div className="col-12">
                  <h4 data-aos="fade-down" data-aos-duration="1500">As featured one</h4>
               </div>
            </div>
            <div className="row text-center">
               <div className="col-12 col-md-3">
                  <img src={flogo1} alt="not found image" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
               </div>
               <div className="col-12 col-md-3">
                  <img src={flogo3} alt="not found image" className="img-fluid" data-aos="fade-up" data-aos-duration="1800" />
               </div>
               <div className="col-12 col-md-3">
                  <img src={flogo4} alt="not found image" className="img-fluid" data-aos="fade-up" data-aos-duration="2200" />
               </div>
               <div className="col-12 col-md-3">
                  <img src={flogo5} alt="not found image" className="img-fluid" data-aos="fade-up" data-aos-duration="3000" />
               </div>
            </div>
         </div>
         {/* ------------------- featured end ------------------- */}



         {/* ------------------- explore-books start ------------------- */}
         <div className="container-fluid g-0" id="explore-books">
            <div className="row d-flex justify-content-center gap-4 gap-md-3 gap-lg-5 g-0">

               {
                  booksDetails.map((item) => (

                     <div className="col-12 col-md-3 border bordered" data-aos="flip-left" data-aos-duration="3000">
                        <div className="row gap-3 text-center g-0">
                           <div className="col-12 p-0">
                              <img src={item.imgUrl} alt="image not found" className="img-fluid" />
                           </div>
                           <div className="col-12 mt-3 text-start">
                              <div className="col-12"><p><u>Title</u> : {item.title}</p></div>
                              <div className="col-12"><p><u>Book Author</u> : {item.authors}</p></div>
                              <div className="col-12">
                                 <p><u>Language</u> : {item.language}</p>
                              </div>
                              <div className="col-12"><p><u>Year</u> : {item.year}</p></div>
                              <div className="col-12">
                                 <p><u>Pages</u> : {item.pages}</p>
                              </div>
                           </div>
                        </div>
                     </div>

                  ))
               }


               <div className="col-12 text-center p-0" data-aos="fade-up" data-aos-duration="1500" >
                  <button onClick={showBooks}>Explore Books</button>
               </div>
            </div>
         </div>
         {/* ------------------- explore-books end ------------------- */}



         {/* ------------------- reader-said start ------------------- */}
         <div className="container-fluid" id="readers">
            <div className="row">
               <div className="col-12 col-lg-4" id="readerQue" data-aos="zoom-in" data-aos-duration="1000">
                  <h1>What Readers Are Saying</h1>
                  <p>
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque lauda ntium.
                  </p>
                  <a href="">Read All</a>
               </div>

               <div className="col-12 col-lg-8 mt-5 mt-lg-0">
                  <div className="row gap-4 d-flex justify-content-center">

                     {

                        props.readerData.map((item) => (
                           <div className="col-12 col-md-5 readersCard p-4" data-aos="flip-left" data-aos-duration="1000">
                              <div className="row">
                                 <div className="col-12">
                                    <p>
                                       {item.para}
                                    </p>
                                 </div>
                                 <div className="col-12">
                                    <div className="row">
                                       <div className="col-3">
                                          <img src={item.image} alt="image not found" className="img-fluid" />
                                       </div>
                                       <div className="col-8">
                                          <h5>{item.name}</h5>
                                          <p>{item.review}</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))

                     }

                  </div>
               </div>
            </div>
         </div>
         {/* ------------------- reader-said end ------------------- */}

      </div>

   );
}


export default Home;
