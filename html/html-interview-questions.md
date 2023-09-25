# HTML Interview Questions and Answers

## Are the HTML tags and elements the same thing?

No.

-   HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but
-   Just <h1> is a starting tag
-   and
-   </h1> is a closing tag.

## What are tags and attributes in HTML?

Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view.

## What are void elements in HTML?

HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.

## What is the advantage of collapsing white space?

In HTML, a blank sequence of whitespace characters is treated as a single space character, Because the browser collapses multiple spaces into a single space character; a developer to indent lines of text without worrying about multiple spaces and maintain readability and understandability of HTML codes.

## What are HTML Entities?

In HTML some characters are reserved like ‘<’, ‘>’, ‘/’, etc. To use these characters in our webpage we need to use the character entities called HTML Entities.
A browser may confuse a less than symbol (<) with a tag so we use HTML Entities to display the less than symbol without causing confusion.
Examples: &lt; or &#60;

## What are different types of lists in HTML?

There are ordered and unordered lists.

-   ordered provides numbering with the list items and is written with <ol></ol>
-   unordered provides bullet points with the list items and is written with <ul></ul>

## What is the ‘class’ attribute in HTML?

The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.

## What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?

Multiple elements in HTML can have the same class value, whereas a value of id attribute of one element cannot be associated with another HTML element.

## Define multipart form data?

Multipart form data is one of the values of the enctype attribute. It's necessary if the user will upload a file through the form. It is used to send the file data to the server-side for processing. The other valid values of the enctype attribute are text/plain and application/x-www-form-urlencoded.

## Describe HTML layout structure

Every web page has different components to display the intended content and a specific UI. But still, there are few things which are templated and are globally accepted way to structure the web page, such as:

<header>: Stores the starting information about the web page.
<footer>: Represents the last section of the page.
<nav>: The navigation menu of the HTML page.
<article>: It is a set of information.
<section>: It is used inside the article block to define the basic structure of a page.
<aside>: Sidebar content of the page.

## How to optimize website assets loading?

To optimize website load time we need to optimize its asset loading and for that:

CDN hosting - A CDN or content delivery network is geographically distributed servers to help reduce latency.
File compression - This is a method that helps to reduce the size of an asset to reduce the data transfer
File concatenation - This reduces the number of HTTP calls
Minify scripts - This reduces the overall file size of js and CSS files
Parallel downloads - Hosting assets in multiple subdomains can help to bypass the download limit of 6 assets per domain of all modern browsers. This can be configured but most general users never modify these settings.
Lazy Loading - Instead of loading all the assets at once, the non-critical assets can be loaded on a need basis. 12. What are the various formatting tags in HTML?

## HTML has various formatting tags

<b> - makes text bold
<i> - makes text italic
<em> - makes text italic but with added semantics importance
<big> - increases the font size of the text by one unit
<small> - decreases the font size of the text by one unit
<sub> - makes the text a subscript
<sup> - makes the text a superscript
<del> - displays as strike out text
<strong> - marks the text as important
<mark> - highlights the text
<ins> - displays as added text

## What are the different kinds of Doctypes available?

The three kinds of Doctypes which are available:

Strict Doctype: does not allow presentational attributes to be written within HTML Elements.
Transitional Doctype: derivative of HTML Strict doctype delclaration, allowing users to use certain elements and attributes which are not allowed to be used in STRICT doctype.
Frameset Doctype: derivative of Transitional doctype declaration, allowing users to use frames.

HTML Frames are used to divide your browser window into multiple sections where each section can load a separate HTML document.

## Please explain how to indicate the character set being used by a document in HTML?

The charset attribute specifies the character encoding for the HTML document.
UTF-8 charset covers almost all of the characters and symbols in the world.

The character set is defined in <meta> tag inside <head> element.

<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   ...
   ...
 </head>
 ...
</html>

## What is the difference between <strong>, <b> tags and <em>, <i> tags?

The effect on a normal webpage of the tags <strong>, <b> and <em>, <i> is the same. <b> and <i> tags stands for bold and italic. These two tags only apply font styling and bold tag <b>, just adds more ink to the text, these tags don't say anything about the text.

Whereas, <strong> and <em> tags represent that the span of text is of strong importance or more importance and emphatic stress respectively than the rest of the text. These tags have semantic meaning.

## What is the significance of <head> and <body> tag in HTML?

<head> tag provides the information about the document. It should always be enclosed in the <html> tag. This tag contains the metadata about the webpage and the tags which are enclosed by head tag like <link>, <meta>, <style>, <script>, etc. are not displayed on the web page. Also, there can be only 1 <head> tag in the entire Html document and will always be before the <body> tag.

<body> tag defines the body of the HTML document. It should always be enclosed in the <html> tag. All the contents which needs to be displayed on the web page like images, text, audio, video, contents, using elements like <p>, <img>, <audio>, <heading>, <video>, <div>, etc. will always be enclosed by the <body> tag. Also, there can be only 1 body element in an HTML document and will always be after the <head> tag.

## Can we display a web page inside a web page or Is nesting of webpages possible?

Yes, we can display a web page inside another HTML web page. HTML provides a tag <iframe> using which we can achieve this functionality.

<iframe src=”url of the web page to embed” />

## How is Cell Padding different from Cell Spacing?

Cell Spacing (similar to margin) is the space or gap between two consecutive cells. Whereas, Cell Padding is the space or gap between the text/ content of the cell and the edge/ border of the cell.

## How can we club two or more rows or columns into a single row or column in an HTML table?

HTML provides two table attributes “rowspan” and “colspan” to make a cell span to multiple rows and columns respectively.

Example: rowspan="2";

## Is it possible to change an inline element into a block level element?

Yes, it is possible using the “display” property with its value as “block”, to change the inline element into a block-level element.

## In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?

There are mainly 7 values of position attribute that can be used to position an HTML element:

### static

Default value. Here the element is positioned according to the normal flow of the document.
absolute: Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.

### fixed

This is similar to absolute except here the elements are positioned relative to the <html> element.

### relative

Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.

### initial

This resets the property to its default value.

### inherit

Here the element inherits or takes the property of its parent. 22. In how many ways you can display HTML elements?

### inline

Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.

### block

using this, we can display any inline element as a block-level element.

### inline-block

This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.

### flex

It displays the container and element as a flexible structure. It follows flexbox property.

### inline-flex

It displays the flex container as an inline element while its content follows the flexbox properties.

### grid

It displays the HTML elements as a grid container.

### none

Using this property we can hide the HTML element.

## Below are some of the display types which are rarely used

table
inline-table
table-cell
table-column
table-row
inline-grid
list-item
inherit
initial

## What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element.

-   “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space.
-   “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.

## How to specify the link in HTML and explain the target attribute?

HTML provides a hyperlink - <a> tag to specify the links in a webpage. The ‘href’ attribute is used to specify the link and the ‘target’ attribute is used to specify, where do we want to open the linked document. The ‘target’ attribute can have the following values:

\_self: This is a default value. It opens the document in the same window or tab as it was clicked.
\_blank: It opens the document in a new window or tab.
\_parent: It opens the document in a parent frame.
\_top: It opens the document in a full-body window. 25. In how many ways can we specify the CSS styles for the HTML element?
There are three ways in which we can specify the styles for HTML elements:

### Inline

Here we use the ‘style’ attribute inside the HTML element.

### Internal

Here we use the <style> tag inside the <head> tag. To apply the style we bind the elements using ‘id’ or ‘class’ attributes.

### External

Here we use the <link> tag inside <head> tag to reference the CSS file into our HTML code. Again the binding between elements and styles is done using ‘id’ or ‘class’ attributes.

## Difference between link tag <link> and anchor tag <a>?

The anchor tag <a> is used to create a hyperlink to another webpage or to a certain part of the webpage and these links are clickable, whereas, link tag <link> defines a link between a document and an external resource and these are not clickable.

## How to include javascript code in HTML?

HTML provides a <script> tag using which we can run the javascript code and make our HTML page more dynamic.

<!DOCTYPE html>
<html>
   <body>
    <h1>
          <span>This is a demo for </span>
          <u><span id="demo"></span></u>
   </h1>
   <script>
       document.getElementById("demo").innerHTML = "script Tag"
   </script>
   </body>
</html>

## When to use scripts in the head and when to use scripts in the body?

If the scripts contain some event-triggered functions or jquery library then we should use them in the head section. If the script writes the content on the page or is not inside a function then it should be placed inside the body section at the bottom. In short, follow below three points:

Place library scripts or event scripts in the head section.
Place normal scripts that do not write anything on the page, in the head section until there is any performance issue.
Place scripts that render something on the web page at the bottom of the body section. 29. What are forms and how to create forms in HTML?
The HTML form is used to collect the user inputs. HTML provides a <form> tag to create forms. To take input from the user we use the <input> tag inside the form so that all collected user data can be sent to the server for processing. There are different input types like ‘button’, ‘checkbox’, ‘number’, ‘text’, ‘password’, ‘submit’ etc.

<form action="/submit_data.php">
   <label>Enter your name: </label>
   <input type="text" name="name" /> 
   <label>Enter Mobile number </label>
   <input type="number" name="mobile_no"/>
   <input type="submit" value="Submit">
</form>

## How to handle events in HTML?

HTML allows event trigger actions in browsers using javascript or JQuery. There are a lot of events like ‘onclick’, ‘ondrag’, ‘onchange’, etc.

<!DOCTYPE html>
<html>
   <body style="padding-top:50px">
       <h3 id="event_demo">0</h3>
       <input type="button" onclick="myFunction()" value="Click Me" />
       <input type="reset" onclick="reset()" value="Reset" />
   </body>
   
   <script>
       function myFunction() {
           var value = document.getElementById("event_demo").innerHTML
           value = parseInt(value) + 1;
           document.getElementById("event_demo").innerHTML = value;
       }
       function reset() {
           document.getElementById("event_demo").innerHTML = 0;
       }
   </script>
</html>

## What are some of the advantages of HTML5 over its previous versions?

Some advantages of HTML5 are:-

-   It has Multimedia Support.
-   It has the capabilities to store offline data using SQL databases and application cache.
-   Javascript can be run in the background.
-   HTML5 also allows users to draw various shapes like rectangles, circles, triangles, etc.
-   Included new Semantic tags and form control tags. 32. How can we include audio or video in a webpage?
-   HTML5 provides two tags: <audio> and <video> tags using which we can add the audio or video directly in the webpage.

## Inline and block elements in HTML5?

### Block

-   Always starts a new line.
-   Takes up full width of the page
-   Browsers add margin before and afer the element.
-   Examples:
<address><article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>

### Inline

-   Does not start on a new line.
-   Only takes up as much width as necessary.
-   Examples:
    <a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var>

## What is the difference between <figure> tag and <img> tag?

    - <figure> tag specifies the self-contained content, like diagrams, images, code snippets, etc.
    - <figure> tag is used to semantically organize the contents of an image like image, image caption, etc
    - <img> tag is used to embed the picture in the HTML5 document.

## How to specify the metadata in HTML5?

    To specify we can use <meta> tag which is a void tag,i.e., it does not have a closing tag. Some of the attributes used with meta tags are name, content, http-equiv, etc. The below image tells how to specify the metadata.

## Is the <datalist> tag and <select> tag same?

    No. The <datalist> tag and <select> tag are different. In the case of <select> tag a user will have to choose from a list of options, whereas <datalist> when used along with the <input> tag provides a suggestion that the user selects one of the options given or can enter some entirely different value.

## Define Image Map?

    Image Map lets a developer map/link different parts of images with the different web pages. It can be achieved by the <map> tag in HTML5, using which we can link images with clickable areas.

<img src=”image_url” , usemap=”#workspace” />
<map  name=”workspace”>
<area shape=”rect” coords=”34, 44, 270, 350” , href=”xyz.html” />
<area shape=”rect” coords=”10, 120, 250, 360” , href=”xyz.html” />
</map> 38. What are Semantic Elements?
Semantic elements are those which describe the particular meaning to the browser and the developer. Elements like <form>, <table>, <article>, <figure>, etc., are semantic elements.

## Is drag and drop possible using HTML5 and how?

    Yes, in HTML5 we can drag and drop an element. This can be achieved using the drag and drop-related events to be used with the element which we want to drag and drop.

### Why do you think the addition of drag-and-drop functionality in HTML5 is important? How will you make an image draggable in HTML5?

    The drag and drop functionality is a very intuitive way to select local files. This is similar to what most of the OS have copy functionality thus making it very easy for the user to comprehend. Before the native drag and drop API, this was achievable by writing complex Javascript programming or external frameworks like jQuery.

To enable this functionality there is a draggable attribute in the <img> tag and need to set ondrop and ondragover attribute to an eventhandler available in scripts.

<!DOCTYPE HTML>
<html>
 <head>
   <script>
     function allowDrop(ev) {
       ev.preventDefault();
     }
     function drop(ev) {
       ...
     }
   </script>
 </head>
 <body>
   ...
   <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" style="border: 1px solid #aaaaaa; width:350px; height: 70px;"></div>
   <br>
   <img id="drag1" src="img_logo.gif" draggable="true" width="336" height="69">
    ...
 </body>
</html>

## Difference between SVG and Canvas HTML5 element?

-   SVG gives better performance with smaller number of objects or larger surface
-   SVG can be modified through script and CSS
-   Canvas gives better performance with smaller surface or larger number of objects
-   Canvas can be modified through script only

## What type of audio files can be played using HTML5?

-   Mp3
-   WAV

## What are the significant goals of the HTML5 specification?

-   Introduction of new element tags to better structure the web page such as <header> tag.
-   Forming a standard in cross-browser behavior and support for different devices and platforms
-   Backward compatible with the older version HTML web pages
-   Introduction of basic interactive elements without the dependency of plugins such as <video> tag instead of the flash plugin.

## Explain the concept of web storage in HTML5

This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. There is a size limit based on different browsers. This helps in decreasing the load time and a smooth user experience. There are two types of web storage that are used to store data locally in HTML5:

-   Local Storage - This helps in storing data that will be retained even though the user reopens the browser. It is stored for each webapp on different browsers.
-   Session Storage - This is used for one session only. After the user closes the browser this gets deleted. 46. What is Microdata in HTML5?
    It is used to help extract data for site crawlers and search engines. It is basically a group of name-value pairs. The groups are called items, and each name-value pair is a property. Most of the search engines like Google, Microsoft, Yandex, etc follow schema.org vocabulary to extract this microdata.

## What is new about the relationship between the <header> and <h1> tags in HTML5?

    As HTML5 was all about better semantics and arrangements of the tags and elements, the <header> tag specifies the header section of the webpage. Unlike in previous version there was one <h1> element for the entire webpage, now this is the header for one section such as <article> or <section>. According to the HTML5 specification, each <header> element must at least have one <h1> tag.

## Explain HTML5 Graphics.

HTML5 supports two kinds of graphics:

Canvas - It is like drawing on a whitepaper or a blank webpage. We can add different graphic designs on web pages with available methods for drawing various geometrical shapes.

<!DOCTYPE HTML>
<html>
 <head>
 </head>
 <body>
   <canvas width="300" height="100" style="border:2px solid;"></canvas>  
 </body>
</html>
SVG - Scalable Vector Graphics are used mostly for diagrams or icons. It follows the XML format.
<!DOCTYPE html>
<html>
 <body>
   <svg width="400" height="110">
     <rect width="300" height="100" style="fill:#FFF;stroke-width:2;stroke:#000" />
   </svg>
 </body>
</html>
Both of the above examples produce this output and represent two different approaches provided by HTML5 to implement graphical aspects in the webpage.

## Explain new input types provided by HTML5 for forms?

Following are the significant new data types offered by HTML5:

Date - Only select date by using type = "date"
Week - Pick a week by using type = "week"
Month - Only select month by using type = "month"
Time - Only select time by using type = "time".
Datetime - Combination of date and time by using type = "datetime"
Datetime-local - Combination of date and time by using type = "datetime-local." but ignoring the timezone
Color - Accepts multiple colors using type = "color"
Email - Accepts one or more email addresses using type = "email"
Number - Accepts a numerical value with additional checks like min and max using type = "number"
Search - Allows searching queries by inputting text using type = "search"
Tel - Allows different phone numbers by using type = "tel"
Placeholder - To display a short hint in the input fields before entering a value using type = "placeholder"
Range - Accepts a numerical value within a specific range using type = "range"
Url - Accepts a web address using type = "url”

<form>  
        <div>
            <label>Date:</label>
            <input type="date" id="date" />
            <br>
            <label>Week:</label>
            <input type="week" id="week" />
            <br>
            <label>Month:</label>
            <input type="month" id="month" />
            <br>
            <label>Time:</label>
            <input type="time" id="time" />
            <br>
            <label>Datetime:</label>
            <input type="datetime" id="datetime" />
            <br>
            <label>Datetime Local:</label>
            <input type="datetime-local" id="datetime-local" />
            <br>
            <label>Color:</label>
            <input type="color" id="color"/>
            <br>
            <label>Email:</label>
            <input type="email" id="email" placeholder="email address" />
            <br>
            <label>Number:</label>
            <input type="number" id="number" />
            <br>
            <label>Search:</label>
            <input type="search" id="search" />
            <br>
            <label>Phone:</label>
            <input type="tel" id="phone" placeholder="Phone Number" pattern="\d{10}$" />
            <br>
            <label>Range:</label>
            <input type="range" id="range" />
            <br>
            <label>URL:</label>
            <input type="url" id="url"/>
        </div>  
    </form>

## What are the New tags in Media Elements in HTML5?

<audio> - Used for sounds, audio streams, or music, embed audio content without any additional plug-in.
<video> - Used for video streams, embed video content etc.

<source> - Used for multiple media resources in media elements, such as audio, video, etc.
<embed> - Used for an external application or embedded content.
<track> - Used for subtitles in the media elements such as video or audio.
<label>
       Video:
   </label>
    <video width="320" height="240" controls>
        <source src="video.mp4" type="video/mp4">
        <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
    </video>
    <br>
    <label>
        Embed:
    </label>
    <embed type="video/webm" src="https://www.youtube.com/embed/MpoE6s2psCw" width="400" height="300">
    <br>
    <label>
        Audio:
    </label>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
    </audio>

## What are Web Workers?

These are added to bring parallelism and async capability. It runs in the background to do the computationally expensive tasks without yielding to make the page responsive. It is achieved by starting a separate thread for such tasks. These are not meant to perform UI operations. There are three types of web workers:

Dedicated Workers - These are workers that are utilized by a single script.
Shared Workers -These are workers that are utilized by multiple scripts running in different windows, IFrames, etc.
Service Workers - These act as proxy servers between web applications, the browser, and the network. Mostly used for push notifications and sync APIs.

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>
<script>
var w;
function startWorker() {
 if(typeof(Worker) !== "undefined") {
if(typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}
w.onmessage = function(event) {
  document.getElementById("result").innerHTML = event.data;
};
 }
}
function stopWorker() {
 w.terminate();
 w = undefined;
}
</script>

## What are raster images and vector images?

Raster Images - The raster image is defined by the arrangement of pixels in a grid with exactly what color the pixel should be. Few raster file formats include PNG(.png), JPEG(.jpg), etc.
Vector Images - The vector image is defined using algorithms with shape and path definitions that can be used to render the image on-screen written in a similar markup fashion. The file extension is .svg

## How to support SVG in old browsers?

To support old browsers instead of defining the resource of svg in src attribute of <img> tag, it should be defined in srcset attribute and in src the fallback png file should be defined.

<img src="circle.png" alt="circle" srcset="circle.svg">

## What are different approaches to make an image responsive?

Art direction - Using <picture> element the landscape image fully shown in desktop layout can be zoomed in with the main subject in focus for a portrait layout.
<picture>

 <source media="(min-width: 650px)" srcset="img_cup.jpg">
 <img src="img_marsh.jpg" style="width:auto;">
</picture>
Bigger Screen (>650px)

For any other screen

Resolution switching - Instead of zoom and crop the images can be scaled accordingly using vector graphics. Also, this can be further optimized to serve different pixel density screens as well.
For example SVG

<svg width="100" height="100">
 <circle cx="50" cy="50" r="40"
 stroke="green" stroke-width="4" fill="yellow" />
</svg>
