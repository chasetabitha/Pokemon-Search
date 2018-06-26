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

document.getElementById('signUp').addEventListener("click", function(e){
  e.preventDefault();
  var xhrSignup = new XMLHttpRequest();
  xhrSignup.open('POST', 'https://jsonplaceholder.typicode.com/posts/', true);
  xhrSignup.setRequestHeader("Content-Type", "application/json");
  xhrSignup.onreadystatechange = function(){
  if (xhrSignup.readyState ===4){
    alert('An Error has Occured');
    alert('Your submission was successful');
  }
};

var signup = {xhrSignup};
xhr.send(JSON.stringify(signup));
})
