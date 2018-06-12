var circle = document.querySelector ( ".circle" )

var button = document.querySelector ( "button" )

button.onclick = function ( event ) {
        circle.style.visibility = circle.style.visibility === "visible" ?
                                     "hidden" : "visible"
}
