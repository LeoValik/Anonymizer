# Data Anonymizer
Data Anonymizer task for trainee frontend developer

<h2>The task</h2>

The goal is to implement a set of anonymizers for different types of content (rules and expected content type are in the section below). Each anonymizer should allow user to configure sign to be used for masking (e.g. “*”, “#”, “X”, etc.). The input for anonymizer is a piece of content. Anonymizer needs to detect an entity which it is able to process (email, phone, etc.) and replace it with anonymized version.


<h3>Structure of project</h3>

File name                          | File content
-----------------------------------|------------------------------------------------------------------
index.html                         | Index file for checking changes
сss/style.css                      | Cascading Style Sheet file to which the necessary styles are collected
scripts/main.js                    | Main application file
scripts/require.js                 | Library that uses the asynchronous dependency loading model - AMD
scripts/modules/email.js           | Javascript email anonymizer file
scripts/modules/phone.js           | JavaScript phone anonymizer file
scripts/modules/skype.js           | JavaScript Skype anonymizer file
scripts/modules/substr_replace.js  | The function file that is used in the skype anonymizer file

<h3>Third Party Libraries</h3>

RequireJS was used as a third-party library. RequireJS uses the asynchronous dependency loading model - AMD. 
It was created for use in the browser, but it can be used with node.js. 
RequireJS is supported by all modern and not only web browsers: RequireJS works in IE 6+, Firefox 2+, Safari 3.2+, Chrome 3+, and Opera 10+.
It has a relatively small size (5.5k in compressed form). 
More information about this library can be found at this link: <https://requirejs.org/>
