var Waiter = function () {
    this.tips = [];
};

Waiter.prototype.tiptotal = function() {
    return this.tips.reduce(function(a, b){
        return a+b;
    }, 0);
};

Waiter.prototype.mealcount = function() {
    return this.tips.length;
};

Waiter.prototype.averagetip = function() {
    if (this.mealcount()) {
        return this.tiptotal() / this.mealcount();
    } else {
        return 0;
    }
};

Waiter.prototype.addTip = function(tip) {
     this.tips.push(tip);
};