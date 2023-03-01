let yesBtn = document.getElementById('yes');
let answer =document.querySelector('container')
let noBtn= document.getElementById('no');
let position = [1,2,3,4,5,6,7,8,9,10,12,15,18,19,20,27,28,33,32,38,40,41,43]

noBtn.addEventListener('click',()=>{
       
   noBtn.style.position = "absolute";
   noBtn.style.left = `${Math.random() *100}%`;
   noBtn.style.top = `${Math.random()  *100}%`;
   console.log(Math.random() *100)
})
yesBtn.addEventListener('click',()=>{
       
  let craetAnswer = document.createElement('div');
  craetAnswer.classList.add('answer');
  craetAnswer.textContent = 'I Knew It !';
  document.body.appendChild(craetAnswer)
})