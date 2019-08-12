// functions

// Show the diagram's model in JSON format
function save(myDiagram) {
    console.log(myDiagram.model.toJson());
    // myDiagram.isModified = false;
}


// event handlers
$(document).ready(() => {
    $( "#savebut" ).click(() => {
        console.log('clicked');
        save(myDiagram);
    });
})



