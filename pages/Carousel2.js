// import Image from "next/image"
// import project_alpha_1 from "../public/project_alpha_1.png";
// import project_alpha_2 from "../public/project_alpha_2.png";




// export default function Carousel2() {

//     return (
//         <div>
//             <div class="container">
//   <h2>Activate Carousel with JavaScript</h2>
//   <div id="myCarousel" class="carousel slide">
//     {/* <!-- Indicators --> */}
//     <ol class="carousel-indicators">
//       <li class="item1 active"></li>
//       <li class="item2"></li>
//       <li class="item3"></li>
//       <li class="item4"></li>
//     </ol>

//     {/* <!-- Wrapper for slides --> */}
//     <div class="carousel-inner" role="listbox">

//       <div class="item active">
//         <Image src="img_chania.jpg" alt="Chania" width="460" height="345"/>
//         <div class="carousel-caption">
//           <h3>Chania</h3>
//           <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
//         </div>
//       </div>

//       <div class="item">
//         <Image src="img_chania2.jpg" alt="Chania" width="460" height="345"/>
//         <div class="carousel-caption">
//           <h3>Chania</h3>
//           <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
//         </div>
//       </div>

//       <div class="item">
//         <Image src="img_flower.jpg" alt="Flower" width="460" height="345"/>
//         <div class="carousel-caption">
//           <h3>Flowers</h3>
//           <p>Beautiful flowers in Kolymbari, Crete.</p>
//         </div>
//       </div>

//       <div class="item">
//         <Image src="img_flower2.jpg" alt="Flower" width="460" height="345"/>
//         <div class="carousel-caption">
//           <h3>Flowers</h3>
//           <p>Beautiful flowers in Kolymbari, Crete.</p>
//         </div>
//       </div>

//     </div>

//     {/* <!-- Left and right controls --> */}
//     <a class="left carousel-control" href="#myCarousel" role="button">
//       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="right carousel-control" href="#myCarousel" role="button">
//       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div>
// </div>

// <script>
// $(document).ready(function(){
//   // Activate Carousel
//   $("#myCarousel").carousel()

//   // Enable Carousel Indicators
//   $(".item1").click(function(){
//     $("#myCarousel").carousel(0)
//   });
//   $(".item2").click(function(){
//     $("#myCarousel").carousel(1)
//   });
//   $(".item3").click(function(){
//     $("#myCarousel").carousel(2)
//   });
//   $(".item4").click(function(){
//     $("#myCarousel").carousel(3)
//   });

//   // Enable Carousel Controls
//   $(".left").click(function(){
//     $("#myCarousel").carousel("prev")
//   });
//   $(".right").click(function(){
//     $("#myCarousel").carousel("next")
//   });
// });
// </script>

//         </div>
//     )
// }
