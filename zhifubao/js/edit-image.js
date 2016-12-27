(function () {
	
	//编辑
	var fileEdit = $("#file-edit");
	fileEdit.on('click', function () {
		$(".image-selected").cropper({
			zoomable: false,
			crop: function(e) {
			    // Output the result data for cropping image.
			    console.log(e.x);
			    $("#coordinate-x").text(e.x);
			    console.log(e.y);
			    $("#coordinate-y").text(e.y);
			    console.log(e.width);
			    $("#coordinate-width").text(e.width);
			    console.log(e.height);
			    $("#coordinate-height").text(e.height);
			 	}
		});
		$('.image-selected').cropper("zoom", 0);
	});
	//裁切
	var fileCut = $("#file-cut");
	fileCut.on("click", function () {
		var canvas = $(".image-selected").cropper("getCroppedCanvas");
		$(".container-div").html(canvas);
	});
	//复制
	var fileCopy = $("#file-copy");
	fileCopy.on("click", function () {
		
		var canvas = $("canvas")[0];
		var tempImage = new Image();
		tempImage.src = canvas.toDataURL("image/png");
		var context = canvas.getContext("2d");
		var originY = parseInt($("#text-origin-get").val());
		var spaceV = parseInt($("#text-space-get").val());
		var originYS = parseInt($("#text-origin-set").val());
		var spaceVS = parseInt($("#text-space-set").val());
		var space = parseInt($("#text-space").val());
		var screenWidth = document.body.offsetWidth;
		var canvasHeight = canvas.offsetHeight;
		var multiple = parseInt($("#text-dpi").val());
		tempImage.onload = function () {
			var count = 0;
			var originYM = originY * multiple;
			var spaceVM = spaceV * multiple;
			var originYSM = originYS * multiple;
			var spaceVSM = spaceVS * multiple;
			var spaceM = space * multiple;
			var screenWidthM = screenWidth * multiple;
			var canvasHeightM = canvasHeight * multiple;
			for (var i = originYM; i < canvasHeightM; i += spaceM) {
				context.drawImage(tempImage, 0, originYM + count * spaceM, screenWidthM, spaceVM, 0, originYSM + count * spaceM, screenWidthM, spaceVSM);
				count ++;
			}
		}
		
	});
	
}());