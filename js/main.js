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

document.addEventListener("keydown", (e) => {
  let collisionDetected = false;
  blockArr.forEach((block) => {
    if (
      player.positionX < block.positionX + block.width &&
      player.positionX + player.width > block.positionX &&
      player.positionY < block.positionY + block.height &&
      player.positionY + player.height > block.positionY
    ) {
      collisionDetected = true;
    }
  });

  blockArr2.forEach((block2) => {
    if (
      player.positionX < block2.positionX + block2.width &&
      player.positionX + player.width > block2.positionX &&
      player.positionY < block2.positionY + block2.height &&
      player.positionY + player.height > block2.positionY
    ) {
      collisionDetected = true;
    }
  });

  blockArr3.forEach((block3) => {
    if (
      player.positionX < block3.positionX + block3.width &&
      player.positionX + player.width > block3.positionX &&
      player.positionY < block3.positionY + block3.height &&
      player.positionY + player.height > block3.positionY
    ) {
      collisionDetected = true;
    }
  });

  blockArr4.forEach((block4) => {
    if (
      player.positionX < block4.positionX + block4.width &&
      player.positionX + player.width > block4.positionX &&
      player.positionY < block4.positionY + block4.height &&
      player.positionY + player.height > block4.positionY
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
  } else {
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
});

const blockArr = [];

setInterval(() => {
  const newBlock = new Block();
  blockArr.push(newBlock);
}, 3000);

setInterval(() => {
  blockArr.forEach((blockEvent) => {
    blockEvent.moveDown();
  });
}, 50);

const blockArr2 = [];

setInterval(() => {
  const newBlock2 = new Block2();
  blockArr2.push(newBlock2);
}, 4000);

setInterval(() => {
  blockArr2.forEach((blockEvent2) => {
    blockEvent2.moveUp();
  });
}, 50);

const blockArr3 = [];

setInterval(() => {
  const newBlock3 = new Block3();
  blockArr3.push(newBlock3);
}, 3000);

setInterval(() => {
  blockArr3.forEach((blockEvent3) => {
    blockEvent3.moveDown();
  });
}, 50);

const blockArr4 = [];

setInterval(() => {
  const newBlock4 = new Block4();
  blockArr4.push(newBlock4);
}, 4000);

setInterval(() => {
  blockArr4.forEach((blockEvent4) => {
    blockEvent4.moveUp();
  });
}, 50);

const player = new Player();

const finish = new Finish();
