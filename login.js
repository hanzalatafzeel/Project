document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('signup').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';


  document.getElementById('signup').onclick = function() {
    document.getElementById('flip-card').classList.toggle('do-flip');
    };

   document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
  document.getElementById('flip-card').classList.toggle('do-flip');
  };

  document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
  document.getElementById('flip-card').classList.toggle('do-flip');
  };

 let form1= document.getElementsById('signup');
 form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.getElementById('')

 })

 let name = document.getElementById('name')
});
