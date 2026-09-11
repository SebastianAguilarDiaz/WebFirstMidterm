# Team AI Prompt & Audit Log
 
**First midterm** Rock paper scissors lizard spock
**Team Members:** Sebastian Luis Enrique Aguilar Díaz, Alejandra Eguiarte Carlos

-----

**Goal:** Create the basic structure for the step 1 view.

**Prompt**:"Using Bootstrap and its grid to make it responsive, create this page structure. The images of the symbols and the pentagon are in the images folder."  


**The Human Audit & Modifications**:  AI generated the structure of the page with html and give some styles to it with a css file, it made each icon as a button .We modified the transtions of the buttons, by instead of scaling the button, changing its brightnesss, also with changed the button's position when the screen size is small to make them look better. Also we changed the colors.


**Integration & Learnings**:  We learned how to make conditional styles by using @media in the css file to make the page resposive instead of just using bootstrap.

-----

**Goal:** Make an animation so that the computers choice appears afetr a short delay.

**Prompt**:"How do I make an element have a delay before it appears, and how do I make it appear gradually, in JS."  


**The Human Audit & Modifications**:  AI generated some ways to make the element appear gradually but one of the concepts was to use a function called "setTimeout()" and another called fadeIn(), and modifying the oppacity of the element. We implemented it with the propper times and steps between the opacities.


**Integration & Learnings**:  We learned how the function "setTimeout() works" and we implented the fadeIn() function in a recursive way so we learned a new way to apply recursion.

-----

**Goal:** Save the score of the user even if the page is recharged

**Prompt**:"How can I save a number in Js even if a page is recharged?"  


**The Human Audit & Modifications**:  AI explained that to save a number one of the easiest way is to save it by using localStorage.setItem() function so we implemented it by savin an item called myScore.


**Integration & Learnings**:  We learned how to save data even when the page is recharged, also learned how does localStorage.setItem() works, it saves the information in the navigator.

-----

**Goal:** Create a rules window that acts as a floating window on the desktop but takes up the full screen on mobile devices.

**Prompt**: "What Bootstrap component can pop as a small window on a computer and as a full screen on a mobile phone. Give me the code for it; instead of adding text in the body, add an image."


**The Human Audit & Modifications**: The AI identified the component as the Bootstrap Modal using the modal-fullscreen-sm-down responsive class. It generated the base structure, and we inserted our specific rules image, centered it, and added the font specifications to the title.

**Integration & Learnings**:  We learned about other Bootstrap elements and their variants. Like modal and modal-fullscreen-sm-down for this case. We discovered how helpful these built-in tools are to simplify UI transitions without having to write a lot of media queries.

-----

**Goal:** Creat the second screen where the tokens are compared side-by-side, ensuring the labels move from above the tokens on desktop to below the tokens on mobile.

**Prompt**: "I have an area divided into two with tokens on each side. How can I make them so that on the computer, they sit side-by-side with text above them, and then on mobile screens, the tokens shrink so they don't cover the whole screen, and the text moves to be below the tokens?"

**The Human Audit & Modifications**: The AI suggested using Flexbox and media queries. We implemented the solution but noticed the colored borders disappeared; we checked the code and realized we needed to change 'border: 20px solid;' to 'border-width: 20px;' so it wouldn't overwrite our custom token colors.

**Integration & Learnings**: We learned that we don't always need to duplicate HTML or use JavaScript to change the visual ordering of elements; CSS has properties like flex-direction: column-reverse that allows us to flip the layout based on screen size.
