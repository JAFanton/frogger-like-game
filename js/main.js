class Player {
    constructor() {
      this.width = 2;
      this.height = 5;
      this.positionX = 0;
      this.positionY = 0;
      this.domElement = null;
  
      this.createDomElement();
    }

    createDomElement(){
        this.domElement = document.createElement("div");
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.top = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }

    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }

    moveUp(){
        this.positionY--;
        this.domElement.style.top = this.positionY + "vh";
    }

    moveDown(){
        this.positionY++;
        this.domElement.style.top = this.positionY + "vh";
    }
}

    document.addEventListener('keydown', (e) => {
        if(e.code === 'ArrowLeft'){
            player.moveLeft();
        } else if(e.code === 'ArrowRight'){
            player.moveRight();
        } else if(e.code === 'ArrowUp'){
            player.moveUp();
        } else if(e.code === 'ArrowDown'){
            player.moveDown();
        }
    });

const player = new Player();
