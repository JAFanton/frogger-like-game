class Player {
  constructor() {
    this.width = 5;
    this.height = 10;
    this.positionX = 0;
    this.positionY = 0;
    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
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
    if (this.positionX + this.width < 100) {
      this.positionX++;
      this.domElement.style.left = this.positionX + "vw";
    }
  }
  moveLeft() {
    if (this.positionX > 0) {
      this.positionX--;
      this.domElement.style.left = this.positionX + "vw";
    }
  }

  moveUp() {
    if (this.positionY > 0) {
      this.positionY--;
      this.domElement.style.top = this.positionY + "vh";
    }
  }

  moveDown() {
    if (this.positionY + this.height < 100) {
      this.positionY++;
      this.domElement.style.top = this.positionY + "vh";
    }
  }
}

class Finish {
  constructor() {
    this.width = 5;
    this.height = 10;
    this.positionX = 100 - this.width;
    this.positionY = 100 - this.height;
    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "finish";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.top = this.positionY + "vh";

    const board = document.getElementById("board");
    board.appendChild(this.domElement);
  }
}

class Block {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;
    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "block";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.top = this.positionY + "vh";

    const board = document.getElementById("board");
    board.appendChild(this.domElement);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    player.moveLeft();
  } else if (e.code === "ArrowRight") {
    player.moveRight();
  } else if (e.code === "ArrowUp") {
    player.moveUp();
  } else if (e.code === "ArrowDown") {
    player.moveDown();
  }
});

const player = new Player();

const block = new Block();

const finish = new Finish();


