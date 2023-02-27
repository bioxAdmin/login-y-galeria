const fileInput = document.getElementById('fileInput');

		fileInput.addEventListener('change', function() {
			const file = fileInput.files[0];
			const videoURL = URL.createObjectURL(file);
			const videoDiv = document.createElement('div');
			videoDiv.className = 'video';
			videoDiv.innerHTML = '<video src="' + videoURL + '" controls></video>';
			const container = document.querySelector('.container');
			container.appendChild(videoDiv);
		});

        function eliminarVideo(id) {
			const videoDiv = document.getElementById(id);
			videoDiv.parentNode.removeChild(videoDiv);
		}
        