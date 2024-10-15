
// Player Avatar
class Player {
  constructor() {
    this.width = 5;
    this.height = 10;
    this.positionX = 0;
    this.positionY = 50;
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

// Finish Line
class Finish {
  constructor() {
    this.width = 10;
    this.height = 100;
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

// Obstacle Lane 1
class Block {
  constructor() {
    this.width = 5;
    this.height = 20;
    this.positionX = 20 - this.width / 2;
    this.positionY = 0 - this.height;
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

  moveDown() {
    this.positionY++;
    this.domElement.style.top = this.positionY + "vh";
  }
}

// Obstacle Lane 2
class Block2 {
  constructor() {
    this.width = 5;
    this.height = 20;
    this.positionX = 40 - this.width / 2;
    this.positionY = 100 + this.height;
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

  moveUp() {
    this.positionY--;
    this.domElement.style.top = this.positionY + "vh";
  }
}

// Obstacle Lane 3
class Block3 {
  constructor() {
    this.width = 5;
    this.height = 20;
    this.positionX = 60 - this.width / 2;
    this.positionY = 0 - this.height;
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

  moveDown() {
    this.positionY++;
    this.domElement.style.top = this.positionY + "vh";
  }
}

// Obstacle Lane 4
class Block4 {
  constructor() {
    this.width = 5;
    this.height = 20;
    this.positionX = 80 - this.width / 2;
    this.positionY = 100 + this.height;
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

  moveUp() {
    this.positionY--;
    this.domElement.style.top = this.positionY + "vh";
  }
}


// Movement functionality
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
  }
);

// Obstacle arrays
const blockArr = [];
const blockArr2 = [];
const blockArr3 = [];
const blockArr4 = [];

// Block array 1 & 3 timed release to 3 seconds
setInterval(() => {
  const newBlock = new Block();
  blockArr.push(newBlock);

  const newBlock3 = new Block3();
  blockArr3.push(newBlock3);
}, 3000);

// Block array 2 & 4 timed release to 4 seconds
setInterval(() => {
  const newBlock2 = new Block2();
  blockArr2.push(newBlock2);

  const newBlock4 = new Block4();
  blockArr4.push(newBlock4);
}, 4000);

// update game
setInterval(() => {
  let collisionDetected = false;

  blockArr.forEach((blockEvent) => {
    // move obstacles
    blockEvent.moveDown();

    // collision detection
    if (
      player.positionX < blockEvent.positionX + blockEvent.width &&
      player.positionX + player.width > blockEvent.positionX &&
      player.positionY < blockEvent.positionY + blockEvent.height &&
      player.positionY + player.height > blockEvent.positionY
    ) {
      collisionDetected = true;
    }
  });

  blockArr2.forEach((blockEvent2) => {
    // move obstacles
    blockEvent2.moveUp();

    // collision detection
    if (
      player.positionX < blockEvent2.positionX + blockEvent2.width &&
      player.positionX + player.width > blockEvent2.positionX &&
      player.positionY < blockEvent2.positionY + blockEvent2.height &&
      player.positionY + player.height > blockEvent2.positionY
    ) {
      collisionDetected = true;
    }
  });

  blockArr3.forEach((blockEvent3) => {
    // move obstacles
    blockEvent3.moveDown();

    // collision detection
    if (
      player.positionX < blockEvent3.positionX + blockEvent3.width &&
      player.positionX + player.width > blockEvent3.positionX &&
      player.positionY < blockEvent3.positionY + blockEvent3.height &&
      player.positionY + player.height > blockEvent3.positionY
    ) {
      collisionDetected = true;
    }
  });

  blockArr4.forEach((blockEvent4) => {
    // move obstacles
    blockEvent4.moveUp();

    // collision detection
    if (
      player.positionX < blockEvent4.positionX + blockEvent4.width &&
      player.positionX + player.width > blockEvent4.positionX &&
      player.positionY < blockEvent4.positionY + blockEvent4.height &&
      player.positionY + player.height > blockEvent4.positionY
    ) {
      collisionDetected = true;
    }
  });

  if (
    player.positionX < finish.positionX + finish.width &&
    player.positionX + player.width > finish.positionX &&
    player.positionY < finish.positionY + finish.height &&
    player.positionY + player.height > finish.positionY
  ) {
    collisionDetected = true;
  }

  if (collisionDetected) {
    player.positionX = 0;
    player.positionY = 50;
    player.domElement.style.left = player.positionX + "vw";
    player.domElement.style.top = player.positionY + "vh";
  }
}, 50);


// create player avatar and finish line
const player = new Player();

const finish = new Finish();
