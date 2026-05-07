DOM >>Document Object Model >>its a tree like structure that is used to represent 
html elements by taking every element as a node

by doing this we are able to traverse the tree via selectors 

through this we are able to change html and affect it directly through P{
    changing the content 
    changing styles 
    creating new components using techniques such as InnerHtml
}

we have a component called document >>!DOCTYPE
TO ACCESS THIS NODES WE USE THE KEYWORD document with the dot notation 
{
    document.getElement>>keyword that is chained with the slectors to select the nodes 
}
we use selectors to link the html elements and their nodes{
    id selectors (document.getElementById("id"))
    class selectors (document.getElementsByClassName("class"))
    tagname selector (document.getElementsByTagName("h1"))
}


to select an array or list of elements we use the query selector {
    you have to define the type of special symbol used 9IF CLASS USE DOT ,IF ID USE HASH 
    for selecting all elements we use the querySelectorAll("p")
    for selecting a single element we use querySelector(".class")
    querySelector("#NAME")
}

CHANGING THE CONTENT {
    WE USE THREE METHODS {
        innerText>>hanldes changing of text but also includes whitespaces 
        TextContent >>changes the content of text but does not interfere with tags (we cannot create or remove any tag with this method )

        innerHtml>>which in addition to changing the content of a tag it has direct manipulation of html(
            you can create tags by replacing existing one or remove the 

            we create tags in js and render them via the document to the user {
                many dynamic application that obtain data (spa-single page application )ecommerce,
            }
        )    }
}
style {
    with styles we chain the document with the style object which allows manipulation of styles 
    with css styles we were using hyphen to seperate property names but with javasctipt we use the camel case method 
    {
        background-image:blue;

        backgroundImage=""
         backgroundColor="color name"

         in full chaining we have 

         document.style.backgroundColor="red"

         if you miss the style object ,you wont be able to access the css properties 
         

    }
}