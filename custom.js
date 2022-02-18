function calculate(){
    //Get Buy Price and Sell Price
    let buyPrice = document.querySelector(".buyPriceInput").value;
    let sellPrice = document.querySelector(".sellPriceInput").value;
    //Divide Sell Price by Buy Price
    let perIncrease = sellPrice / buyPrice;
    //Get Leverage
    let leverage = document.querySelector(".leverageInput").value;
    //Get Investment
    let investment = document.querySelector(".investmentInput").value;
    //Profit Calculation
    let profit = ((investment * leverage) * (perIncrease)) - (investment * leverage)
    //Show Profit in p tag
    document.querySelector("p").innerHTML = "PROFIT: " + "/=" + (Math.round(profit * 100) / 100).toFixed(2) + " " + "INCREASE: " + (Math.round(perIncrease * 100) / 100-1).toFixed(2) + "%";
}
//Click Event Fire on Calculate Button
document.querySelector(".btn").addEventListener("click", calculate);
