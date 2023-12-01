var StrategyDesign = /** @class */ (function () {
    function StrategyDesign(strategy) {
        this.strategy = strategy;
    }
    StrategyDesign.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    StrategyDesign.prototype.execute = function () {
        return this.strategy.algo(['a', 'b', 'c', 'e', 'd']);
    };
    return StrategyDesign;
}());
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.algo = function (data) {
        return data.sort();
    };
    return Sort;
}());
var Reverse = /** @class */ (function () {
    function Reverse() {
    }
    Reverse.prototype.algo = function (data) {
        return data.reverse();
    };
    return Reverse;
}());
// client 
var context = new StrategyDesign(new Sort);
console.log(context.execute());
context.setStrategy(new Reverse);
console.log(context.execute());
