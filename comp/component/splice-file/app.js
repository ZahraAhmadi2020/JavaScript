 

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function handleFileSelect(evt) {
  var f = evt.target.files[0]; // FileList object
  var reader = new FileReader();
  let baseSize = 10 * 1024 * 1024; // 10 Mb
  // // Closure to capture the file information.
  reader.onload = (e) => {
    console.log("size: ", e.target.result);

    let loopCount =  Math.ceil(e.target.result.byteLength / baseSize);

    for (let index = 0; index < loopCount; index++) {
      let start = index * baseSize;
      let end = start + baseSize;
      let slice = e.target.result.slice(start , end);
      console.log(`slice: ${index + 1}`, slice);

      // ((i) => {
      //   //..............ajax...........
      //   //then(resp => {
      //     //..........i.......
      //   //});
      // })(index);
    }
  };
  // // Read in the image file as a data URL.
  reader.readAsArrayBuffer(f);

  var url = window.URL.createObjectURL(f);
  $("#movie").prop("src", url);
}






 

// drag & drop
function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
 

 
  
