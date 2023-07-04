class Card {
    constructor(name, cost) {
        this.name = name,
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost),
        this.power = power,
        this.res = res
    }

    attack(target) {
        console.log("I attack your life points directly")
        target.res -= this.power;
    }
    showStats() {
        console.log(`
        Name : ${this.name},
        Power : ${this.power}, 
        Resilience : ${this.res}`)
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost),
        this.text = text,
        this.stat = stat,
        this.magnitude = magnitude;
    }

    play( target ) {
        if (target instanceof Unit) {
            if (this.stat == "power") {
                target.power += this.magnitude;
                console.log(this.text)
            }
            else {
                target.res += this.magnitude;
                console.log(this.text)
            }
            return Effect.text;
        }
        else {
            throw new Error ("Target must be a unit!")
        }
    }
}

const rbn = new Unit("Red Belt Ninja", 3, 4, 4);
const bbn = new Unit("Black Belt Ninja", 4, 5, 4);
const ha = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", +3);
const upr = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pp = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2);

rbn.showStats();
ha.play(rbn);
rbn.showStats();
bbn.showStats();
upr.play(rbn);
rbn.showStats();
pp.play(rbn);
rbn.showStats();
rbn.attack(bbn);
bbn.showStats();



