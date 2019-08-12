savedata = [{data: 'TEST'}, {data2: 'TEST2'}];

$(document).ready(() => {
    $.get('/getmodel', {savedata: savedata})
        .done((data) => {
            // console.log(data);
            loadModel(data);
        })
        .fail((xhr) => {
            alert('intl_data failed!');
            console.log(xhr);
        })
})

function loadModel(data) {
    console.log(data);
    let $ = go.GraphObject.make;
    let myDiagram = $(go.Diagram, "myDiagramDiv",
        {
            "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
        });

    // define a simple Node template
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            // the entire node will have a light-blue background
            //{ background: "#BDC3C7" },
            $(go.Shape, "RoundedRectangle", {fill: "#BDC3C7"},
                new go.Binding("fill", "color")),
            $(go.TextBlock,
                "Default Text",  // the initial value for TextBlock.text
                // some room around the text, a larger font, and a white stroke:
                {margin: 12, stroke: "black", font: "bold 16px sans-serif"},
                // TextBlock.text is data bound to the "name" attribute of the model data
                new go.Binding("text", "", function (data) {
                    return data.key.concat(": ").concat(data.title)
                }))
        );

    myDiagram.layout =
        $(go.TreeLayout,
            {angle: 0, layerSpacing: 35});

    let myModel = $(go.GraphLinksModel);

    myModel.nodeDataArray = data.nodesDataArray;
    myModel.linkDataArray = data.linksDataArray;

    myDiagram.model = myModel;
};

