document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "I Love Coding.", "I Code Cool Websites.", "I Develop Wordpress Websites.", "I'M Hina Asad!"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        });
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
    }
    // start the text animation
    StartTextAnimation(0);
    });
    

    // slick slider
    
  //   $(document).ready(function(){
  //   $('.your-class').slick({
  //       slidesToShow: 4,
  // slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  // prevArrow: false,
  //   nextArrow: false
  //   });
  //   });

  $('.your-class').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
        
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

        // smooth scroll top to bottom

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });



    // $(document).ready(function(){
    //   // Add smooth scrolling to all links
    //   $('#myBtn').on('click', function(event) {
    
    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //       // Prevent default anchor click behavior
    //       event.preventDefault();
    
    //       // Store hash
    //       var hash = this.hash;
    
    //       // Using jQuery's animate() method to add smooth page scroll
    //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //       $('html, body').animate({
    //         scrollBottom: $(hash).offset().
    //       }, 800, function(){
    
    //         // Add hash (#) to URL when done scrolling (default click behavior)
    //         window.location.hash = hash;
    //       });
    //     } // End if
    //   });
    // });


      // scroll-down to scroll-top button
   // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}