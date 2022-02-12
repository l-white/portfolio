const h3 = document.querySelectorAll('h3');
const hiddenContent = document.querySelectorAll('.hidden');
const button = document.querySelectorAll('button');

for (let i = 0; i < hiddenContent.length; i++){
  hiddenContent[i].style.display = 'none';
}

for (let i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(event){
  if (hiddenContent[i].style.display === "none"){
    hiddenContent[i].style.display = "block";
  } else {
    hiddenContent[i].style.display = "none";
  }
  console.log(event.target)
  console.log(event.target.nextSibling)
  console.log(event.target.nextElementSibling)
})
}


