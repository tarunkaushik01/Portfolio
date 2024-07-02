let content = document.querySelector('#span');
const arr = ['Web Developer' , 'UI/UX Designer' , 'Programmer']
const skill_button = document.querySelector('#Skills');
const Education_button = document.querySelector('#Education');
const Experience_button = document.querySelector('#Experience');
const selected = document.querySelector('.selected');

let i=0;
setInterval(function (){
    content.innerHTML = arr[i];
    i++;
    if(i > 2)i=0;
},1500)

function opentab(link){
    document.getElementById('skills').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('experience').style.display = "none";
    document.getElementById(link).style.display = "block"; 
}

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

