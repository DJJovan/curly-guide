document.title = 'DOM';

console.log(document.querySelector('p'));

//  var element = document.createElement('p');
//  var textNode = document.createTextNode('lorem ipsum');
//  element .appendChild(textNode);
//  document.body.appendChild(element);

//  var input = document.querySelector('input');
//  document.querySelector('button').onclick() = function(){
//      var paragraf = document.createElement('p');
//      var paragrafNode = document.createTextNode (input);
//      paragraf.appendChild(paragrafNode);
//  }
var input = document.querySelector('input');


input.focus();
function sendMessage (){
    var message = input.value;
    
    var element = document.createElement('p');
    
    var textNode = document.createTextNode(message);
    
    element.appendChild(textNode);
    element.classList.add('message');
    
    document.querySelector('.messages').appendChild(element);
    
    input.value = '';
    
    input.focus();
}
document.querySelector('button').addEventListener('click',sendMessage);

input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter'){
        sendMessage();
    }
})
