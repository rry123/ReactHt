// a programming interface for web documents
//The DOM is a tree-like representation of the web page that gets loaded into the browser
// The DOm is designed to be independent of any particular programming language , making the structural 
// representation of the document available from the single consistent , APIs



// The createElement()

/*
const para = document.createElement("p");
para.innerText = "This is a paragraph created via DOM";
document.body.appendChild(para);
 */


/*
Finding HTML elements

by id
tag name
class name
etc
*/


// Finding HTML elements by CSS Selectors : querySelector()

/*
var paragraphs = document.querySelectorAll( 'p' )
paragraphs.forEach(paragraph =>paragraph.display = 'none')
*/

/* 
Changing HTML elements
element.innerHTML = new html content  : change the inner html of an element
element.attribute = new value : change the attribute value of the HTML element
element.style.property = new style :  change the style of an HTML element

Method
element.setAttribute(attribute, value) :  change the attribute value of an HTML element
*/

/*
Adding and Deleting Elements
document.createElement(element) :   create an html element
document.removeChild(ele,emt) : remove an HTML element
document.appendChild :  Add an HTML element
document.replaceChiild(new, old) : Replace an HTML element
document.write(text) : Write into the HTML output stream
*/


/*
HTML events 
Onload and Onunload functions
The onload and onunload events are triggered when the user enters or leaves the page
The onload event can be used to check the visitor's browser type and browser version
*/