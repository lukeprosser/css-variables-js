# css-variables-js
Scoped CSS Variables and JavaScript

This project takes advantage of CSS variables to dynamically manipulate the styles of an image.

Here I'll discuss the CSS first, as it influences how the HTML attributes are defined.

## CSS
The following root variables are created:

--base: #ffc600;
--spacing: 10px;
--blur: 10px;

'--base' sets the default base colour, '--spacing' is used to control padding and '--blur' is used to apply blur to the image. It should be noted that these variables can be applied anywhere, however.

For example, the image features the following default styles (before JavaScript is applied):

padding: var(--spacing);
background: var(--base);
filter: blur(var(--blur));

## HTML
Each input is given a name attribute. For example, the spacing control is named 'spacing'.

The spacing and blur controls are given custom dataset attributes - in this case, 'data-sizing: "px"'. This ensures that these parameters can be styled using pixels.

The base color input has a default value set to #ffc600.

## JavaScript
All inputs are selected with 'querySelectorAll' and stored in a constant named 'inputs'.

A functioned named 'handleUpdate()' is created to set the variables and manipulate styles. In contains two steps:

<ol>
  <li>A constant named 'suffix' is set to store the data-sizing attribute 'px' for spacing and blur (defined in HTML), or allow nothing ('') for base color so that it is not undefined.</li>
  <li>The variable styles are updated by selecting the entire document (root) and setting the property of base, spacing or blur via the 'name' attribute. The 'px' suffix is added if it exists.</li>
</ol>

Finally, forEach loops are used to add event listeners on all inputs for both 'change' and 'mousemove' events. Using 'mousemove' enables the styles to change while the controls are being moved.
