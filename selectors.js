// id
document.querySelectorAll('#search_form_input_homepage'); // returns an array
document.querySelector('#search_form_input_homepage'); // returns a certain element (tag)
document.getElementById('search_form_input_homepage');
// class
document.querySelector('.js-search-input') // returns a certain element (tag)
document.getElementsByClassName('js-search-input search__input--adv'); // returns an array
// name
document.querySelector('[name="q"]');
document.getElementsByName('q'); // returns an array
