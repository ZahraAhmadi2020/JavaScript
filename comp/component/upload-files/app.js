 
 


// upload multiple files 

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
   

  // multiple 
  Array.from(input.files)
    .forEach(file => {
      let reader = new FileReader();
      
      reader.onload = (e)=>{
    let stringBase64 = arrayBufferToBase64(e.target.result);
        console.log("base64: ", stringBase64);
        
        let img = document.createElement('img');
        img.src = `data:${ file.type};base64,${stringBase64}`;
        img.alt = 'test image...';

        let div = document.getElementById('image');
        div.appendChild(img)
  }
  reader.readAsArrayBuffer( file );
  })



  
  

  
}
  // document.getElementById('file').addEventListener('click', clicked);
  // function clicked() {
    
  //   let container = document.querySelector('.container');
    
  //   console.log(container);
  // }

}

 

