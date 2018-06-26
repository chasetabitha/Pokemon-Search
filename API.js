document.getElementById('submit').addEventListener("click", function(e){
  e.preventDefault();
  var name = document.getElementById('name').value;
  var requestString = 'http://pokeapi/co/api/v2/?name=${name}';
  var response;


var xhr = new XMLHttpRequest();
xhr.open('GET', requestString, true);
xhr.onreadystatechange = function(){
  if (xhr.readyState === 4){
    response = (xhr.response);
    console.log("afterresponse", response.Name);
  }
};

xhr.send();
})

//for(var i = 0; i < 0, i++){
  //createDiv(i);
//}
