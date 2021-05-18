var view = document.getElementById('view');
var ctx = view.getContext('2d');

class Sprite {
    
    constructor(name, width, height, path, mode) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.path = path;
        this.curSprite = new Image();
        this.curSprite.src = this.path;
        this.mode = mode;
        this.SpriteMods = Object.freeze({
            "SINGLE" : 1,
            "MULTIPLE" : 2
        });

        if(mode == this.SpriteMods.MULTIPLE){
            console.log("multiple sprites");
        }

        



    }

    Render(mode, x, y) {
        ctx.drawImage(this.curSprite, this.width, this.height, this.width, this.height, x, y, this.width, this.height);
    }

};
export default Sprite;