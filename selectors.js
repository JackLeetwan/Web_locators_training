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


// direct parent child relation
document.querySelector('.someClass > h1 > p > ');

// parent containing child somewhere in the structure
document.querySelector('.someClass h1 p');

// Basic XPath Rules and Examples
// Path from root

// /html/body


// Tag anywhere

// //input


// Direct Children

// //ul/li/a


// Descendants

// //div/a


// Any Element

// //*


// Any Descendants

// //div//*


// Attribute Value Equality

// //li[@class='zcm__item']


// Attribute Condition AND

// //img[@width<20][@height<20]

// //img[@width<20 and @height<20]


// Attribute Condition OR

// //input[@name='q' or @id='search_form_input']


// Contains Function

// //div[contains(@class, ‘result’)]

// //div[contains(@class, ‘result__snippet’)]


// Starts with function

// //div[starts-with(@class, ‘result’)]


// Logical not function

// //a[not(contains(@class, 'header'))]


// contains or not contain text 

// //div[contains(@class, 'result__snippet')][contains(., 'bamboo')]
// //div[contains(@class, 'result__snippet')][not(contains(., 'bamboo'))]


// index in xpath

// (//div[contains(@class, 'result__snippet')])[3]


// elements relative to other elements using advanced relationships
// //a to get any link on the page, square brackets for a conditional statement, and then .//image:

//a[.//img]


// relationships to the current node.

//a[contains(@class, 'zcm__link')]

//a[contains(@class, 'zcm__link')][preceding::a[@data-zci-link='web']]


