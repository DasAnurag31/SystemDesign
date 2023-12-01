class StrategyDesign{
    private strategy : IStrategy;

    constructor(strategy : IStrategy){
        this.strategy = strategy;
    }

    public setStrategy(strategy : IStrategy): void {
        this.strategy = strategy;
    }

    public execute() : string[]{
        return this.strategy.algo(['a','b','c','e','d']);
    }
}

interface IStrategy{
    algo(data:string[]):string[];
}

class Sort implements IStrategy{
    public algo(data:string[]):string[]{
        return data.sort();
    }
}

class Reverse implements IStrategy{
    public algo(data : string[]):string[]{
        return data.reverse();
    }
}

// client 
const context = new StrategyDesign(new Sort)
console.log(context.execute());

context.setStrategy(new Reverse);
console.log(context.execute());
 

