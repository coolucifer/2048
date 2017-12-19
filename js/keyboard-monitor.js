var keyMonitor = function () {
  $(document).keydown(function (event) {
    event.preventDefault();
    var e = event || window.event;
    var k = e.keyCode || e.which;
    switch (k) {
      case 38: //Up
        moveUp();
        break;
      case 40: //Down
        moveDown();
        break;
      case 37: //Left
        moveLeft();
        break;
      case 39: //Right
        moveRight();
        break;
    }
  });
};