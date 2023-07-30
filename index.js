//---- 1 no answer ----

function purchaseDiscount(value) {
    if (50 > value) {
        return "you don't get the discount";
    }
    else if (50 <= value && 100 >= value) {
        let discount = value - (value * 5) / (100);
        return `you get the discount 5%. \n total amount ${value}.\n after then discount your total amount ${discount}`
    }
    else if (200 <= value) {
        let discount = value - (value * 15) / (100);
        return `you get the discount 15%. \n total amount ${value}.\n after then discount your total amount ${discount}`
    }
}

let amount = purchaseDiscount(250)
console.log(amount)