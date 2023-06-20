var tabButtons=document.querySelectorAll(".tablecontainer .buttoncontainer button ")
var tabpanels=document.querySelectorAll(".tablecontainer .tablepanel button ")

function showpanel(panelIndex,colorcode) {
    tablebuttons .forEach(function(Node) {
     Node.style.backgroundcolor="" ;
       Node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundcolor=colorcode;
    tabButtons[panelIndex].style.color="white";
    tabpanels.forEach(function(node) {
        node.style.display="none";
        
    });
    tabpanels[panelIndex].style.display="block";
    tabpanels[panelindex].style.backgroundcolor="colorcode";
}
showpanel(0,'#f44336');