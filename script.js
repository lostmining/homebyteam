
document.addEventListener('DOMContentLoaded', function() {
  
    var charCodes = [
        104, 116, 116, 112, 115, 58, 47, 47, 104, 111, 109, 101, 
        98, 121, 114, 101, 116, 101, 97, 109, 45, 100, 111, 116, 
        46, 98, 108, 111, 103, 115, 112, 111, 116, 46, 99, 111, 
        109, 47
    ];
    
    var decodedUrl = "";
    
    for (var i = 0; i < charCodes.length; i++) {
        decodedUrl += String.fromCharCode(charCodes[i]);
    }
    

    var iframe = document.getElementById('contentFrame');
    
    if (iframe) {
     
        iframe.src = decodedUrl;
        
       
        setTimeout(function() {
            iframe.style.visibility = 'visible';
        }, 3000); 
    }
});
