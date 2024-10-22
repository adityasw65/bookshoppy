import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


function Footer() {

   useEffect(() => {
      AOS.init();
   })


   return (

      <div className="container-fluid g-0" id="footer" style={{overflow:"hidden"}}>
         <div className="row text-center text-md-start g-0">
            <div className="col-12 col-md-4 p-0" data-aos="fade-right" data-aos-duration="1500">
               <a class="navbar-brand" href="#" >BookShoppy</a>
            </div>

            <div className="col-12 col-md-4 p-0" id="footer-social-links">
               <div className="row text-center text-lg-start g-0" data-aos="fade-down" data-aos-duration="1500">
                  <div className="col-12 col-lg-3 p-0">
                     <a href="#">Home</a>
                  </div>
                  <div className="col-12 col-lg-3 p-0">
                     <a href="#">Books</a>
                  </div>
                  <div className="col-12 col-lg-3 p-0">
                     <a href="#">Bio</a>
                  </div>
                  <div className="col-12 col-lg-3 p-0">
                     <a href="#">Contact</a>
                  </div>
               </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center gap-5 p-0" id="icons" data-aos="fade-left" data-aos-duration="1500">
               <a href="#"><i class="fa-brands fa-facebook"></i></a>
               <a href="#"><i class="fa-brands fa-twitter"></i></a>
               <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
         </div>
         <hr className="divider"/>
         <div className="row text-center mt-5 g-0">
            <div className="col-12 p-0" >
               <p >Copyright © 2024 eBook Author | Powered by eBook Author <a href="https://adityawaportfolio.netlify.app/" target="_blank">AdityaWa</a></p>
            </div>
         </div>
      </div>

   );

}

export default Footer;






