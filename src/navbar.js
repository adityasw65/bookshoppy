
function Navbar() {

   window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
         document.getElementById("navbar").style.backgroundColor = "rgba(128, 128, 128, 0.167)";
         document.getElementById("navbar").style.transition = "all 0.5s 0s linear";
         document.getElementById("navbar").style.backdropFilter = "blur(10px)";
      } else {
         document.getElementById("navbar").style.backgroundColor = "transparent";
         document.getElementById("navbar").style.transition = "all 0.5s 0s linear";
         document.getElementById("navbar").style.backdropFilter = "blur(0px)";
      }
   })

   return (

      <>

         <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
            <div class="container-fluid">
               <a class="navbar-brand" href="#">BookShoppy</a>

               <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-0 gap-md-5">
                     <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#home">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#featured">Shop</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#readers">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#readers">Blog</a>
                     </li>
                  </ul>

               </div>
            </div>
         </nav>


         <div class="offcanvas offcanvas-top h-50" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
               <button type="button" class="btn-close mx-auto" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#offcanvasExample"></button>
            </div>
            <div class="offcanvas-body">
               <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-0 gap-md-3 text-center">
                  <li class="nav-item">
                     <a class="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Shop</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Blog</a>
                  </li>
               </ul>
            </div>
         </div>

      </>

   );

}

export default Navbar;




