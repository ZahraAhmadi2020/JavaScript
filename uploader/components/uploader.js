function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}


// request 
// function postTest(file) {
//   const xhr = new XMLHttpRequest();

//   var formData = new FormData();

//   formData.append("myFile", file, file.name);
  
//   xhr.open("post", "http://192.168.1.25:12930/Home/TestFilePost",true);

//   xhr.onload=function(){
//     if(this.status === 200){
//       console.log(xhr.responseText);
//     }
//   }
//   xhr.send(formData);


// }

//  upload file 
window.onload = () => {
  let input = document.getElementById("file");

  input.onchange = (e) => {
    Array.from(input.files).forEach((file) => {
      let reader = new FileReader();

      reader.onload = (e) => {
        let stringBase64 = arrayBufferToBase64(e.target.result);
        console.log("base64: ", stringBase64);

        let img = document.createElement("img");
        img.src = `data:${file.type};base64,${stringBase64}`;
        img.alt = "test image...";

        let div = document.getElementById("image");
        div.appendChild(img);
      };
      reader.readAsArrayBuffer(file);
    });
  };
};


 
// icon upload 
   








// drag and drop 
$(function () {
  function preview(file) {
    switch (file.type) {
      case "video/mp4":
        let video = document.createElement("video");
        var url = window.URL.createObjectURL(file);
        video.src = url;
        video.controls = true;

        video.style.height = "200px";
        $("#uploadfile").append(video);
        break;
      case "image/jpeg":
        let img = document.createElement("img");
        var url = window.URL.createObjectURL(file);
        img.src = url;
        img.style.height = "130px";
        $("#uploadfile").append(img);
        break;
       

      default:
        break;
    }
  }

  // preventing page from redirecting
  $("html").on("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("h1").text("Drag here");
  });

  $("html").on("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // Drag enter
  $(".upload-area").on("dragenter", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("h1").text("Drop");
  });

  // Drag over
  $(".upload-area").on("dragover", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("h1").text("Drop");
  });

  // Drop
  $(".upload-area").on("drop", function (e) {
    e.stopPropagation();
    e.preventDefault();

    $("h1").text("Upload");

    var file = e.originalEvent.dataTransfer.files;
    // var fd = new FormData();

    preview(file[0]);

    // fd.append("file", file[0]);

    postTest(file[0]);
  });

  // Open file selector on div click
  $("#uploadfile").click(function () {
    $("#file").click();
  });

  // file selected
  $("#file").change(function () {
    // var fd = new FormData();

    var file = $("#file")[0].files[0];

    // fd.append("file", files);
    preview(file);
    // uploadData(fd);
    postTest(file);
  });
});

// Sending AJAX request and upload file
function uploadData(formdata) {
  $.ajax({
    url: "upload.php",
    type: "post",
    data: formdata,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function (response) {
      addThumbnail(response);
    },
  });
}

// Added thumbnail
function addThumbnail(data) {
  $("#uploadfile h1").remove();
  var len = $("#uploadfile div.thumbnail").length;

  var num = Number(len);
  num = num + 1;

  var name = data.name;
  var size = convertSize(data.size);
  var src = data.src;

  // Creating an thumbnail
  $("#uploadfile").append(
    '<div id="thumbnail_' + num + '" class="thumbnail"></div>'
  );
  $("#thumbnail_" + num).append(
    '<img src="' + src + '" width="100%" height="78%">'
  );
  $("#thumbnail_" + num).append('<span class="size">' + size + "<span>");
}

// Bytes conversion
function convertSize(size) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (size == 200) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
  return Math.round(size / Math.pow(1024, i), 2) + " " + sizes[i];
}

// the end

//  progress-bar

const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgress(22), 2000);
setTimeout(() => changeProgress(45), 4000);
setTimeout(() => changeProgress(85), 6600);
setTimeout(() => changeProgress(98), 7266);
setTimeout(() => changeProgress(100), 9200);
