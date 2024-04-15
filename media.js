const allFacilities = document.querySelectorAll('.facilities');
const allNews = document.querySelectorAll('.news');
const allEvents = document.querySelectorAll('.events');


document.addEventListener('click', function(event) {
    let news = document.getElementById('news');
    let events = document.getElementById('events');
    let facilities = document.getElementById('facilities');

    if (event.target && event.target.id === 'news') {
        events.style.color = '';
        news.style.color = '#f6f604';
        facilities.style.color = 'white';

        allNews.forEach(eventElement => {
            eventElement.style.display = 'block'; 
        });
        allEvents.forEach(newsElement => {
            newsElement.style.display = ''; 
        });
        allFacilities.forEach(facilitiesElement => {
            facilitiesElement.style.display = 'none'; 
        });
    }

    if (event.target && event.target.id === 'events') {

        events.style.color = '#f6f604';
        news.style.color = '';
        facilities.style.color = '#ffffff';

        allNews.forEach(eventElement => {
            eventElement.style.display = ''; 
        });
        allEvents.forEach(newsElement => {
            newsElement.style.display = 'block'; 
        });
        allFacilities.forEach(facilitiesElement => {
            facilitiesElement.style.display = 'none'; 
        });
    }
    if (event.target && event.target.id === 'facilities') {
        facilities.style.color = '';
        events.style.color = '';
        news.style.color = '';

        facilities.style.color = '#f6f604';
        allNews.forEach(eventElement => {
            eventElement.style.display = ''; 
        });
        allEvents.forEach(newsElement => {
            newsElement.style.display = ''; 
        });
        allFacilities.forEach(facilitiesElement => {
            facilitiesElement.style.display = ''; 
        });
    }
});