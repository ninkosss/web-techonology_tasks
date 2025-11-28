const allElements = document.querySelectorAll('*');

allElements.forEach(element => {

    let originalBackgroundColor = '';

    element.addEventListener('mouseenter', function(event) {

        event.stopPropagation();

        originalBackgroundColor = window.getComputedStyle(this).backgroundColor;

        this.style.backgroundColor = 'red';
    });

    element.addEventListener('mouseleave', function(event) {
        event.stopPropagation();

        this.style.backgroundColor = originalBackgroundColor;
    });
});
