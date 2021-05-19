
var utils = {
    
    isEmptyPix : function  (img, x, y, w, h) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        var isTransparent = false;
        for (let spriteh = 0; spriteh < h; spriteh+=4) {
            for (let spritew = 0; spritew < w; spritew+=4) {
                
                if (ctx.getImageData(x + spritew, y + spritew, w, h).data[3] > 0) {
                    
                    // canvas.width = w;
                    // canvas.height = h;
                    // ctx.putImageData(_sprite, 0, 0);
                    // document.body.appendChild(canvas);
                    // var _img = canvas.toDataURL().split(";base64")[1];
                    console.log("non");
                    return  [true, x, y];
                }
            }
            
        }
        //console.log("transparent");
        return false
        //console.log(ctx.getImageData(x, y, w, h).data[3]);
        // var idata = ctx.getImageData(x, y, w, h),      // needed as usual ...
        //     u32 = new Uint32Array(idata.data.buffer),  // reads 1x uint32 instead of 4x uint8
        //     i = 0, len = u32.length;
        
        //while(i < len) if (u32[i++] & 0xff000000) return false;     // if !== 0 return false, not empty
        //return true;                                // all empty, all OK
    }
    // saveToJson : function(){
    //     window.
    // }

}


export default utils;