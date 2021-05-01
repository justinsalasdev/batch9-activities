function makeDraggable(evt) {
  var selectedElement = null;
  var svg = evt.target;

  svg.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drag);
  svg.addEventListener("mouseup", endDrag);
  svg.addEventListener("mouseleave", endDrag);
  function startDrag(evt) {
    if (evt.target.classList.contains("draggable")) {
      selectedElement = evt.target;
      console.log(selectedElement);
    }
  }
  function drag(evt) {
    if (selectedElement) {
      evt.preventDefault();
      var x = parseFloat(selectedElement.getAttributeNS(null, "x"));
      selectedElement.setAttributeNS(null, "x", x + 0.1);
    }
  }
  function endDrag(evt) {
    selectedElement = null;
  }
}
