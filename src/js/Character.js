export class Character {
  constructor(obj) {
    this.name = obj.name;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = 5;
    this.defense = 5;
    this.powerModeCounter = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = Math.max(100, this.health);
    }
  }

  set powerMode(val) {
    if (val && this.powerModeCounter !== -1) {
      this.powerModeCounter = 3;
    }
  }

  get curPowerMode() {
    if (this.powerModeCounter > 0) {
      return true;
    }
    return false;
  }

  get curHealth() {
    if (this.powerModeCounter > 0) {
      return this.health * 2;
    }
    return this.health;
  }

  get curDefense() {
    if (this.powerModeCounter > 0) {
      return this.defense * 2;
    }
    return this.attack;
  }

  get curAttack() {
    if (this.powerModeCounter > 0) {
      return this.attack * 2;
    }
    return this.attack;
  }

  doAttack() {
    if (this.powerModeCounter > 0) {
      this.powerModeCounter -= 1;
    }
    if (this.powerModeCounter <= 0) {
      this.powerMode = false;
      this.powerModeCounter = -1;
    }
  }

  curProps() {
    return {
      name: this.name,
      level: this.level,
      health: this.curHealth,
      attack: this.curAttack,
      defense: this.curDefense,
      powerMode: this.curPowerMode,
      powerModeCounter: this.powerModeCounter,
    }
  }
}

export class Bowman extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 25;
    this.defense = 25;
  }
}

export class Swordsman extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 40;
    this.defense = 10;
  }
}

export class Magician extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 10;
    this.defense = 40;
  }
}

export class Undead extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 25;
    this.defense = 25;
  }
}

export class Zombie extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 40;
    this.defense = 10;
  }
}

export class Daemon extends Character {
  constructor(obj) {
    super(obj);
    this.attack = 10;
    this.defense = 40;
  }
}
