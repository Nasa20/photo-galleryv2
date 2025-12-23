function upDate(previewPic) {
			const imageDiv = document.getElementById("image");
			imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
			imageDiv.innerHTML = `<span>${previewPic.alt}</span>`;
		}

		function unDo() {
			const imageDiv = document.getElementById("image");
			imageDiv.style.backgroundImage = "url('')";
			imageDiv.innerHTML = "<span>Hover over an image below to display here.</span>";
		}

		function addTabindex() {
			const images = document.querySelectorAll(".preview");
			
			images.forEach(img => {
				img.setAttribute("tabindex", "0");
				
				img.addEventListener("focus", function() {
					upDate(this);
				});
				
				img.addEventListener("blur", function() {
					unDo();
				});
			});
		}

		window.addEventListener("load", addTabindex);
