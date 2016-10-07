console.log( 'js sourced' );

var appendToDom = function(){
  console.log( 'you clicked the button' );
  // append some text to the dom
  document.getElementById( 'textOut' ).innerHTML += '<p>You clicked the button!</p>';
}
