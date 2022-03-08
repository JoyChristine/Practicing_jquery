// $(document).ready(function() {
//     $(".clickable").click(function() {
//       $(".walrus-showing").toggle();
//       $(".walrus-hidden").toggle();
//     });
// });
// // slide-toggle
// $(document).ready(function() {
//     $(".slide-toggle").click(function() {
//       $(".slide-show").slideToggle();
//       $(".slide-hidden").slideToggle();
//     });
// });

//fade in -fadeout
$(document).ready(function() {
    $(".fade-color").click(function() {
        $(".fade-show").fadeIn("slow");
    });
     $(".fade-color").click(function() {
        $(".fade-hidden").fadeOut(400);
    });
});



// jQuery('h1').click(function(){
//     alert("This is a heading tag");
//     alert("I told you, THIS IS A HEADER!");
// });

// jQuery('p').click(function(){
//     alert("This is a paragraph")
// });

// jQuery('img').click(function(){
//     alert("This is an image")
// });


// $(document).ready(function() {
//     $("h1").click(function() {
//       alert("This is a header.");
//     });
  
//     $("p").click(function() {
//       alert("This is a paragraph.");
//     });
  
//     $("img").click(function() {
//       alert("This is an image.");
//     });
// });