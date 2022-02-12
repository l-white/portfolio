const h3 = document.querySelectorAll('h3');
const hiddenContent = document.querySelectorAll('.hidden');

for (let i = 0; i < hiddenContent.length; i++){
  hiddenContent[i].style.display = 'none';
}

for (let i = 0; i < h3.length; i++){
  h3[i].addEventListener('click', function(event){
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


