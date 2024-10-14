class Player {
    constructor() {
      this.width = 20;
      this.height = 10;
      this.positionX = 50 - this.width / 2;
      this.positionY = 0;
      this.domElement = null;
  
      this.createDomElement();
    }
}

