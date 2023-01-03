 
  const { event } = require("jquery");

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function handleFileSelect(evt){
  var f = evt.target.files ;
  var reader = new FileReader();

  reader.onload = (e) =>{
    console.log("size: ", e.target.result);
    let stringBase64 = arrayBufferToBase64(e.target.result);
        console.log("base64: ", stringBase64);

     let img = document.createElement('img');
        img.src = `data:${ file.type};base64,${stringBase64}`;
        img.alt = 'test image...';

        let div = document.getElementById('image');
        div.appendChild(img)

  };


  reader.readAsArrayBuffer(f);

  var url = window.URL.createObjectURL(f);
  $("#movie","image").prop("src", url);
}

 
 
    






 
 

// the end 


//  progress-bar 
  
 const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgress(22), 1000);
setTimeout(() => changeProgress(45), 2000);
setTimeout(() => changeProgress(85), 4600);
setTimeout(() => changeProgress(98), 5266);
setTimeout(() => changeProgress(100), 8000);
