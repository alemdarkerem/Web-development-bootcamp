$("h1").click(function() {
$("h1").css('color', 'purple');
});


$("input").keypress(function(event){
console.log(event.key)
}); 

$(document).keypress(function(event){
$("h1").text(event.key);
});

// change text color when hover on to it
// $("h1").on("mouseover", function() {
// $("h1").css("color", "orange");
// });

// Toggle hide animation applied to h1 using button (.toggle, .hide, .show, .fadeOut, fadeIn, fadeToggle)
// $("button").click(function(){
//   $("h1").fadeToggle();  
// });

// removes every button 
// $("button").remove(); 

//Chain animations
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})