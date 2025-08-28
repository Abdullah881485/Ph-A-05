 <!-- *Question 1 -->

 getElementById()---
 
 This selector method is used to select one specific element and the result will be a DOM element.

 getElementsByClassName() ----

 It's used for selecting all elements with a specific class name.The result is of this method an Array like Object.All selected element are stored in this Array like object.

 querySelector() -----

 This method is select elements using CSS Selector like (.card).But it gives only first matching element.

 querySelectorAll() -----

 This selector method also select elements using CSS Selector. It gives a NodeList of all matching elements.

 <!-- **Question-2 -->

 By using document.createElement("example:h1"),I can create a element and using document.appendChild(""),I can insert a new element into the DOM.

  <!--***Question-3  -->

Event Bubbling is a process where an event (like click, mouseover, etc.) occurring on a DOM element first triggers on that element, then propagates up to its parent, then its parent's parent, and so on. For example, if a click event occurs on a button inside a card, the event first happens on the button, then on the card, then on the body, and continues up the DOM tree.

<!-- ****Question-4 -->

Event Delegation is a process where used a single event listener in a parent element, and then use logic to detect which child element triggered the event.Instead of using, multiple eventListener() for multiple child element we can use this.It can be used for balance a project and writing code easily.

<!-- *****Question-5 -->

preventDefault() ----

This method is used for prevents the browser from doing it's default behavior.It's commonly used for form element,If we add event into a button which is inside a form element then it's prevents browser from reloading.

stopPropagation() -----

This method is used for prevents the event from going up the DOM tree to parent element.If we used a eventListener() in a parent element also used a eventListener() in a child element and we want to stop event of parent element when child element is clicked, then we need to use stopPropagation().  