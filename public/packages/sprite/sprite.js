import utils from "../utils/utils.js"


var view = document.getElementById('view');
var ctx = view.getContext('2d');

class Sprite {
    
    constructor(name, width, height, path, mode) {

        
            this.name = name;
            this.width = width;
            this.height = height;
            this.path = path;
            this.x = 0;
            this.y = 0;
            
            //this.curSprite.onload = function() {console.log(curSprite.height.bind(this));};
            this.mode = mode;
            this.SpriteMods = Object.freeze({
                "SINGLE" : 1,
                "MULTIPLE" : 2
            });

            this.spriteSheet = {};
            
            //console.log(this);
                
            this.curSprite = new Image();
            
            this.curSprite.src = this.path;
            
            this.curSprite.addEventListener("load", LoadImage.bind(this));
            
            function LoadImage(ev){
                //console.log(this.curSprite.width);
                if(this.mode == this.SpriteMods.MULTIPLE){
                    
                    var w = Math.floor(this.curSprite.width / this.width);
                    var h = Math.floor(this.curSprite.height / this.height);
                    var count = 0;
                    
                    for (let curh = 1; curh <= h; curh++) {
                        for (let curw = 1; curw <= w; curw++) {
                            var response = utils.isEmptyPix(this.curSprite, curw * this.width - this.width, curh * this.height - this.height, this.width, this.height);
                            console.log(response);
                            if (response[0]) {
                                this.spriteSheet[count] = new Sprite(this.name + "-" + count, this.width, this.height, this.path, 1);
                                this.spriteSheet[count].x = response[1];
                                this.spriteSheet[count].y = response[2];
                                console.log(this.spriteSheet)
                                console.log(response[1]);
                                count++;
                                
                                
                            } 
                        }
                    }
                    console.log(this.spriteSheet)
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.spriteSheet)
                    };
                    fetch('http://localhost:3000/json', options).catch(error =>  {
                        console.log(error);
                    });
                }
            }  
            
            
            
          
            


       
         



    }

    Render(mode, x, y) {
        ctx.drawImage(this.curSprite, this.width, this.height, this.width, this.height, x, y, this.width, this.height);
    }

};
export default Sprite;