console.log( 'js sourced' );

var appendToDom = function(){
  console.log( 'in appendToDom' );
  // get user input
  var textInput = document.getElementById( 'textIn' ).value;
  // display on DOM
  document.getElementById( 'textOut' ).innerHTML += '<p>You typed: ' + textInput + '</p>';
  // clear input field
  document.getElementById( 'textIn' ).value='';
}
