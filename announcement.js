const boxImg1 = document.getElementById('box1');
const boxImg2 = document.getElementById('box2');
const boxImg3 = document.getElementById('box3');
const boxImg4 = document.getElementById('box4');
const boxImg5 = document.getElementById('box5');
const boxImg6 = document.getElementById('box6');


const templateBox = document.getElementById('template-box');
const searchCon = document.getElementById('search-con');


function createTemplate(id) {
    const parentBox = document.getElementById(`box${id}`);
    const title = parentBox.querySelector('.info-title').innerHTML;
    const time = parentBox.querySelector('.info-time').innerHTML;
    const details = parentBox.querySelector('.info-details').innerHTML;
    const template = `
    <div class="box-whole">
    <div><img src="/assets/boxvr.png" class="box-shape"></div>
    <div class="info-main-title">${title}</div>
    <div class="exit" id="exit"><</div>
    <div class="info-w">${time}</div>
    <div class="info-location">WHERE: NAME OF THE VENUE</div>
    <div class="info-full-details">${details}</div>
    </div>
    `;
    return template;
}

// use to target if the exit is exist
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'exit') {
        searchCon.style.display = '';
        templateBox.innerHTML = '';
    }
});

// this is not working
// for (let i = 1; i <= 6; i++) {
//     `boxImg${i}`.addEventListener('click', function(){
//         const box = i;
//         searchCon.style.display = 'none';
//         templateBox.innerHTML = createTemplate(box);
//     });
// }

boxImg1.addEventListener('click', function(){
    const box = 1;
    searchCon.style.display = 'none';
    templateBox.innerHTML = createTemplate(box);
});
boxImg2.addEventListener('click', function(){
    const box = 2;
    searchCon.style.display = 'none';
    templateBox.innerHTML = createTemplate(box);
});
boxImg3.addEventListener('click', function(){
    const box = 3;
    searchCon.style.display = 'none';
    templateBox.innerHTML = createTemplate(box);
});
boxImg4.addEventListener('click', function(){
    const box = 4;
    searchCon.style.display = 'none';
    templateBox.innerHTML = createTemplate(box);
});
boxImg5.addEventListener('click', function(){
    const box = 5;
    searchCon.style.display = 'none';
    templateBox.innerHTML = createTemplate(box);
});
boxImg6.addEventListener('click', function(){
    const box = 6;
    searchCon.style.display = 'none';
    templateBox.innerHTML = createTemplate(box);
});