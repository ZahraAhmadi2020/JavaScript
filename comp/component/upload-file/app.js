 
function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
     binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
window.onload = () => {
  let input = document.getElementById('file');
input.onchange= (e) => {
  if (e.target.files.length == 0) {
    return;
  }
  console.log(e.target.files);



  let arraybuffer;
  let reader = new FileReader();

  reader.onload = (readerEvent)=>{
    let stringBase64 = arrayBufferToBase64(readerEvent.target.result);
    console.log("base64: ", stringBase64);
  
    document.getElementById('image').src = `data:${e.target.files[0].type};base64,${stringBase64}`;
  }
  reader.readAsArrayBuffer(e.target.files[0]);
}
  
}

// the end 


 