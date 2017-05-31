var projectDemoList;

$.get("devdemos.json", function(data) {
    projectDemoList = JSON.parse(data);
    loadGrid();
});

function loadGrid() {
    var grid = $("#demo-grid-command-buttons").bootgrid({
        formatters: {
            "commands": function(column, row)  {
                return "<div class=\"btn-group\"><button type=\"button\" class=\"btn btn-sm btn-default command-info\" data-row-id=\"" + row.description + "\">Info</span></button> " + 
                "<button type=\"button\" class=\"btn btn-sm btn-default command-open\" data-row-id=\"" + row.url + "\">Open</span></button></div>";
            }            
        }
    }).bootgrid("clear").bootgrid("append", projectDemoList).on("loaded.rs.jquery.bootgrid", function()
    {
        /* Executes after data is loaded and rendered */
        grid.find(".command-info").on("click", function(e)
        {
            //appwin.doInfoWin("Description", $(this).data("row-id"), "large");
            
        }).end().find(".command-open").on("click", function(e)
        {
            var rowId = $(this).data("row-id");
    
    
        });
    });
}