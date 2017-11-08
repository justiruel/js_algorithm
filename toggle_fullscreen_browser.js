<script>
        var fullscreen = 0;
        function toggleFullscreen(element) {
            if (fullscreen == 0) {
                launchFullscreen(element);
            } else {
                exitFullscreen()
            }
        }

        function launchFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            fullscreen = 1;
            console.log(fullscreen);
        }
        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            fullscreen = 0;
            console.log(fullscreen);
        }
    </script>
