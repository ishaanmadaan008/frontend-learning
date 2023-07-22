class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster{
    
    constructor(options)
    {
        super(options)
        this.health = super.health-10;
    }
  
    bite(Snake)
    {
        return "bite"
    }
  }