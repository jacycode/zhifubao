(function () {
	window.URL = window.URL || window.webkitURL;
    $("#file-select").on("change", selectImageFile);
    function selectImageFile(e) {
    		$('.image-selected').attr('src', window.URL.createObjectURL(this.files[0]));
    }
}());
