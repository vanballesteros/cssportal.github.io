function hideTab(tabgroup) {
    document.querySelectorAll(`${tabgroup} > div`).forEach(div => {
        div.style.display = 'none';
    });
}

hideTab('.tabgroup');

document.querySelector('.tabgroup > div:first-of-type').style.display = 'block';

document.querySelectorAll('.tabs a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const tabgroup = `#${this.closest('.tabs').getAttribute('data-tabgroup')}`;
        const target = this.getAttribute('href');

        // Remove 'active' class from all sibling anchors
        this.closest('ul').querySelectorAll('a').forEach(a => {
            a.classList.remove('active');
        });

        this.classList.add('active');

        hideTab(tabgroup);

        document.querySelector(target).style.display = 'block';
    });
});