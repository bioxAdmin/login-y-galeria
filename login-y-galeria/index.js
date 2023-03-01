
        function eliminarVideo(id) {
			var videoDiv = document.getElementById("id");
			videoDiv.parentNode.removeChild(videoDiv);
		}
		function agregarVideo() {
			var videoInput = document.getElementById("video-input");
			var video = document.createElement("video");
			video.src = URL.createObjectURL(videoInput.files[0]);
			video.controls = true;
			document.body.appendChild(video);
	 }
		 function EliminarElemento() {
			var eliminar = document.getElementById("idVideo");
			
	 	}
		