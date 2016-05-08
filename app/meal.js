var Meal = function(){
    this.price = 0;
    this.taxrate = 0;
    this.tiprate = 0;
};

Meal.prototype.subtotal = function(){
    return this.price * (1+(this.taxrate/100));
};
Meal.prototype.tip = function(){
    return this.subtotal() * this.tiprate/100;
};
Meal.prototype.total = function() {
    return this.subtotal() + this.tip();
};