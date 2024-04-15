const lock = document.getElementById('lock');
const bgImg = document.getElementById('bg-img');
const bgYellow = document.getElementById('bg-yellow');
const signPage = document.getElementById('signPage');
const conStudent = document.getElementById('con-student');
const homeTitle = document.getElementById('home-title');
const newStudent = document.getElementById('newStudent');
const oldStudent = document.getElementById('oldStudent');
const log = document.getElementById('log');
const logo = document.getElementById('logo');
const formPage = document.getElementById('formPage');
const logoImg = document.getElementById('logo-img');
const homeInfo = document.getElementById('home-info');
const mdMan = document.getElementById('md-man');
const mdWoman = document.getElementById('md-woman');
const main = document.getElementById('main');
const sideBar = document.getElementById('sideBar');
const portalLogo = document.getElementById('portal-logo');
const portalCon = document.getElementById('portal-con');
const portalTitle = document.getElementById('portal-title');


lock.addEventListener('click', () => {
    logoImg.style.animation = 'smaLogo 1s ease forwards';
    // formPage.style.placeItems = 'start';  
    // formPage.style.marginLeft = '500px' ;

    homeInfo.style.animation = 'slideOpenLeft 1s ease-out 0.3s forwards';
    if(window.matchMedia('(max-width: 452px)').matches) {
        bgYellow.style.animation = 'slideOpenDown 1s ease-out 0.3s forwards';
        bgImg.style.animation = 'slideOpenUp 1s ease-out 0.3s forwards';
        conStudent.style.animation = 'showForm 1s ease forwards';
        signPage.style.display = 'block';
        signPage.style.animation = 'showForm 1s ease forwards';
        lock.style.display = 'none';
        homeTitle.style.display = 'none';
       
    }else if(window.matchMedia('(min-width: 453px)').matches && window.matchMedia('(max-width: 601px)').matches){
        bgYellow.style.animation = 'slideOpenDown 1s ease-out 0.3s forwards';
        bgImg.style.animation = 'slideOpenUp 1s ease-out 0.3s forwards';
        conStudent.style.animation = 'showForm 1s ease forwards';
        signPage.style.display = 'block';
        signPage.style.animation = 'showForm 1s ease forwards';
        lock.style.display = 'none';
        homeTitle.style.display = 'none';
    }
    else if(window.matchMedia('(min-width: 601px)').matches && window.matchMedia('(max-width: 768px)').matches){
        bgYellow.style.animation = 'slideOpenDown 1s ease-out 0.3s forwards';
        bgImg.style.animation = 'slideOpenUp 1s ease-out 0.3s forwards';
        conStudent.style.animation = 'showForm 1s ease forwards';
        signPage.style.display = 'block';
        signPage.style.animation = 'showForm 1s ease forwards';
        lock.style.display = 'none';
        homeTitle.style.display = 'none';
    }
    else if(window.matchMedia('(min-width: 769px)').matches && window.matchMedia('(max-width: 1025px)').matches){
        bgYellow.style.animation = 'slideOpenRight 1s ease-out 0.3s forwards';
        bgImg.style.animation = 'slideOpenLeft 1s ease-out 0.3s forwards';
        conStudent.style.animation = 'showForm 1s ease forwards';
        signPage.style.display = 'block';
        signPage.style.animation = 'showForm 1s ease forwards';
        lock.style.display = 'none';
        homeTitle.style.display = 'none';
    }
    else{
        mdMan.style.display = 'block'
        mdMan.style.animation = 'show 1s ease forwards'
        bgYellow.style.animation = 'slideOpenRight 1s ease-out 0.3s forwards';
        bgImg.style.animation = 'slideOpenLeft 1s ease-out 0.3s forwards';
        conStudent.style.animation = 'showForm 1s ease forwards';
        signPage.style.display = 'block';
        signPage.style.animation = 'showForm 1s ease forwards';
        lock.style.display = 'none';
        homeTitle.style.display = 'none';
    }

});

newStudent.addEventListener('click', () => {
    loginPage.style.display = 'none';
    signPage.style.display = 'block';
    signPage.style.animation = 'showForm 1s ease forwards';
    newStudent.style.backgroundColor = '#ffffff';
    oldStudent.style.backgroundColor = '';
    lock.style.display = 'none';
    homeTitle.style.display = 'none';
    if(window.matchMedia('(max-width: 452px)').matches) {
       
       
    }else if(window.matchMedia('(min-width: 453px)').matches && window.matchMedia('(max-width: 601px)').matches){
       
    }
    else if(window.matchMedia('(min-width: 601px)').matches && window.matchMedia('(max-width: 768px)').matches){
       
    }
    else if(window.matchMedia('(min-width: 769px)').matches && window.matchMedia('(max-width: 1025px)').matches){
       
    }
    else{
        mdMan.style.display = 'block'
        mdMan.style.animation = 'show 1s ease forwards'
        mdWoman.style.display = ''
        mdWoman.style.animation = ''
       
    }
});

oldStudent.addEventListener('click', () => {
    loginPage.style.display = 'block';
    loginPage.style.animation = 'showForm 1s ease forwards';
    newStudent.style.backgroundColor = '#DDAB55';
    oldStudent.style.backgroundColor = '#ffffff';
    signPage.style.display = 'none';
    lock.style.display = 'none';
    homeTitle.style.display = 'none';
    if(window.matchMedia('(max-width: 452px)').matches) {
       
       
    }else if(window.matchMedia('(min-width: 453px)').matches && window.matchMedia('(max-width: 601px)').matches){
       
    }
    else if(window.matchMedia('(min-width: 601px)').matches && window.matchMedia('(max-width: 768px)').matches){
       
    }
    else if(window.matchMedia('(min-width: 769px)').matches && window.matchMedia('(max-width: 1025px)').matches){
       
    }
    else{
        mdWoman.style.display = 'block'
        mdWoman.style.animation = 'show 1s ease forwards'
        mdMan.style.display = 'block'
        mdMan.style.animation = ''
       
    }
});

logoImg.addEventListener('click', () => {
    mdMan.style.display = ''
    mdWoman.style.display = ''
    bgYellow.style.animation = '';
    bgImg.style.animation = '';
    logoImg.style.animation = '';
    homeInfo.style.animation = '';
    conStudent.style.animation = '';
    loginPage.style.display = '';
    signPage.style.display = '';
    lock.style.display = '';
    homeTitle.style.display = '';

});

log.addEventListener('click', () => {
    log.style.display = 'none';
    portalTitle.style.opacity = "1";
    portalTitle.style.animation = 'show 1s ease 0.2s forwards';
    portalCon.style.display = 'block';
    portalLogo.style.display = 'block';
    portalLogo.style.animation = 'show 1s ease 0.2s forwards';
    portalCon.style.animation = 'show 1s ease 0.2s forwards';
    sideBar.style.display = 'block';
    main.style.background = 'url(/assets/homebg.jpg)';
    mdMan.style.display = '';
    mdWoman.style.display = '';
    logoImg.style.display = 'none';
    homeInfo.style.display = 'none';
    bgYellow.style.display = 'none';
    bgImg.style.display = 'none';
    conStudent.style.display = 'none';
    signPage.style.display = 'none';
    loginPage.style.display = 'none';
    lock.style.display = 'none';
    homeTitle.style.display = 'none';
    if(window.matchMedia('(max-width: 452px)').matches) {
        sideBar.style.animation = 'sideBarDown 1s ease forwards';
       
    }else if(window.matchMedia('(min-width: 453px)').matches && window.matchMedia('(max-width: 601px)').matches){
        sideBar.style.animation = 'showSideBar 1s ease forwards';
        
    }
    else if(window.matchMedia('(min-width: 601px)').matches && window.matchMedia('(max-width: 768px)').matches){
        sideBar.style.animation = 'showSideBar 1s ease forwards';
        
    }
    else if(window.matchMedia('(min-width: 769px)').matches && window.matchMedia('(max-width: 1025px)').matches){
        sideBar.style.animation = 'showSideBar 1s ease forwards';
       
    }
    else{
        sideBar.style.animation = 'showSideBar 1s ease forwards';
        
    }

});