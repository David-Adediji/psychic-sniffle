// function loaded(){

//     let itemObj = {
//         name: product.value,
//         quantity: productLeft.value,
//         price: productPrice.value,
//         amountNeeded: orderAmount.value 
//     };

//     // alert(orderAmount.value);

//     if(itemObj.amountNeeded <= itemObj.quantity){
//         totalAmount.innerHTML = itemObj.amountNeeded * itemObj.price ;
//     }
//     if(itemObj.amountNeeded >= itemObj.quantity){
//         alert("Amount requestted not available");
//     }

// }

function load(){

    function Products(name, quantity, price, amountNeeded){

        this.Name = name;
        this.Quantity = quantity;
        this.Price = price;
        this.AmountNeeded = amountNeeded;
        this.calculateOrder = function(){
            totalAmount.innerHTML = firstProduct.Price * firstProduct.AmountNeeded;
            // if(firstProduct.AmountNeeded <= firstProduct.Quantity){
                 
            // }
            // else if(firstProduct.AmountNeeded >= firstProduct.Quantity)
            // {
            //     alert("Quantity not available");
            // }
        }
    }
    let firstProduct = new Products("Bags", productLeft.value, productPrice.value, orderAmount.value);        
        orderAmount.addEventListener("keyup", firstProduct.calculateOrder);
    
    
}
    


// function total() {
//     overallTotal.innerHTML = totalAmount.value + totalAmount2.value;
// }

