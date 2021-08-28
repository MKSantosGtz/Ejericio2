class Dado {
  lanzar() {
    let num = Math.floor(Math.random() * 6 + 1);
    if (num <= 2) {
      return 2;
    } else if (num === 3) {
      return 3;
    } else {
      return 1;
    }
  }
}

let d1 = new Dado();

class Career {
  constructor(dado, distance, runerName1, runerName2) {
    this.dado = dado;
    this.runners = [0, 0];
    this.runnerRuned1 = [];
    this.runnerRuned2 = [];
    this.distance = distance;
    this.runnerName1 = runerName1;
    this.runnerName2 = runerName2;
  }

  run() {
    let equalRuns = false;
    while (equalRuns === false) {
      this.runners[0] += this.dado.lanzar();
      this.sayRunning(this.runnerName1, this.runners[0]);

      this.runners[1] += this.dado.lanzar();
      this.sayRunning(this.runnerName2, this.runners[1]);

      this.runnerRuned1.push(this.runners[0]);
      if (this.distance <= this.runners[0]) {
        equalRuns = this.checkRunTimes();
      }

      this.runnerRuned2.push(this.runners[1]);
      if (this.distance <= this.runners[1]) {
        equalRuns = this.checkRunTimes();
      }
    }
    this.win();
  }

  checkRunTimes() {
    if (this.runnerRuned1.length === this.runnerRuned2.length) {
      return true;
    } else if (this.runnerRuned1.length < this.runnerRuned2.length) {
      return false;
    } else if (this.runnerRuned1.length > this.runnerRuned2.length) {
      this.runners[1] += this.dado.lanzar();
      return true;
    }
    console.log(this.runners[0], this.runners[1]);
  }

  win() {
    if (
      (this.runners[0] >= 100 && this.runners[1] >= 100) ||
      this.runners[0] === this.runners[1]
    ) {
      console.log(`${this.runnerName1} y ${this.runnerName2} empataron`);
    } else if (this.runners[0] > this.runners[1]) {
      console.log(`${this.runnerName1} gano la carrera`);
    } else {
      console.log(`${this.runnerName2} gano la carrera`);
    }
  }

  sayRunning(runner, runned) {
    console.log(`El/La corredor(a) ${runner} avanzo a ${runned} metros`);
  }
}

let c1 = new Career(d1, 100, "Luis", "Alex");
c1.run();
