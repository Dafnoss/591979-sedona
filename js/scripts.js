
function scriptsRun () {

    function getButton () {
        var button = document.querySelector(".btn");
        if (button == null) {
            return;
        }

        button.onclick = function () {
            var searchBlock = document.querySelector('.search-form');
            if (searchBlock.classList.contains('hide')) {
                searchBlock.classList.remove('hide')
            } else
            searchBlock.classList.add('hide')
        }
    };

    function getSlider() {
        var elm = document.querySelector('.price-range-input');
        var container = elm.parentNode;
        var values = elm.getAttribute('data-values').split(' ');

        values.forEach(function (value, i, values) {
            var rangePart = elm.cloneNode();
            rangePart.type = 'range';
            rangePart.removeAttribute('data-values');
            rangePart.value = value;
            rangePart = container.insertBefore(rangePart, elm);
        });

        elm.remove();

    };

    getButton();
    getSlider();
}

window.onload = scriptsRun;
