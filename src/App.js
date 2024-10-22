import './App.css';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Home from "./home.js";

import testImage1 from "./images/testimonials-image.png";
import testImage2 from "./images/testimonials-image02.png";
import testImage3 from "./images/testimonials-image03.png";
import testImage4 from "./images/testimonials-image04.png";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

   

   const readerData = [

      {
         para: "Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.",
         image: testImage1,
         name: "Mike Sendler",
         review: "Review on Book 1"
      },
      {
         para: "Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.",
         image: testImage2,
         name: "Charmaine Tobey",
         review: "Review on Book 2"
      },
      {
         para: "Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.",
         image: testImage3,
         name: "Delmar Byers",
         review: "Review on Book 3"
      },
      {
         para: "Justo vestibulum risus imperdiet conse ctetur conse ctetur pretium urna augue etiam risus acc um san volutpat urna, eusem per enim, est aliquam laoet urna fringilla viverra.",
         image: testImage4,
         name: "Shanna Margolis",
         review: "Review on Book 4"
      }

   ]

   return (
      <div className="App">

         <Navbar />
         <Home readerData={readerData} />
         <Footer />
         
      </div>



   );



}

export default App;
