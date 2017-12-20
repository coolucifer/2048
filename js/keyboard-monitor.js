var keyMonitor = function () {
  $(document).keydown(function (event) {
    var e = event || window.event;
    var k = e.keyCode || e.which;
    switch (k) {
      case 38: //Up
        e.preventDefault();
        moveUp();
        break;
      case 40: //Down
        e.preventDefault();
        moveDown();
        break;
      case 37: //Left
        e.preventDefault();
        moveLeft();
        break;
      case 39: //Right
        e.preventDefault();
        moveRight();
        break;
    }
  });
};