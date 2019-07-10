// constuser = {};

// fetch("url")
// 	.then(res => res.json())
// 	.then(res => (
// 			res.forEach(element => {});
// 		);

// 		function wyswietlanie(data) {
// 			data.forEach(element => {});
// 		}

let idUser = ''
let mainDiv = document.createElement("div");

function getIdUser() {
	const idUser = document.getElementsByClassName('idUser')[0].value
	console.log(idUser)
	// mainDiv.innerHTML = ''  czyści po wyświetleniu kolejnego
	if (idUser > 0 && idUser <= 10) {
		fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
			.then(res => res.json())
			.then(res => {

				console.log(res)


				let userPhone = document.getElementById('userPhone')
				userPhone.innerHTML = res.phone
				mainDiv.innerHTML = ''

				// let paraEmail = document.createElement('p')
				// let paraName = document.createElement('p')
				// let paraPhone = document.createElement('p')
				// paraName.innerHTML = "<p id ='mainID'>" + res.name + "</p>"
				// paraEmail.innerHTML = "<p id ='mainID2'>" + res.email + "</p>"
				userPhone.innerHTML = "<p id ='mainID3'>" + res.phone + "</p>"
				// mainDiv.appendChild(paraEmail)
				// mainDiv.appendChild(paraName)
				mainDiv.appendChild(userPhone)
				document.body.appendChild(mainDiv)
				
			})
			.catch(error => console.error(error));
	} else {
		alert("Podana liczba jest nieprawidłowa" + " " + idUser)
	}
}
var speed = 80;
var text = "Nr telefonu klienta";
var paddingLength;
var count = 0;
var switchIt = true;
var userPhone;
function setText()
{
  userPhone = document.getElementById("userPhone");
  paddingLength = parseInt(userPhone.size - text.length - 1);
  var padding = "";
  for(i = 0; i < paddingLength; i++){
    padding = ' ' + padding;
  }
  userPhone.value = padding + text;
}
function scroll()
{
  var value = userPhone.value;
  if (switchIt){
    value = value.substr(1, value.length);
    if (value.length == text.length){
      switchIt = false;
    }
  }
  else{
    value = ' ' + value;
    if (++count > paddingLength){
      count = 0;
      switchIt = true;
    }
  }
  userPhone.value = value;
  setTimeout("scroll()", speed);
}