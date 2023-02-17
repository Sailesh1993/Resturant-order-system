let count = 0;
let sum = 0;
let cart = {};
let btn = document.querySelectorAll(".btn-add");
let list = document.getElementById("order-list");

for (let i=0;i<btn.length; i++){
    let addButton = btn[i];
    addButton.addEventListener("click", addToCart);
}



function addToCart(event) {

let itemName = event.target.closest("p").parentElement.querySelector(".flavor").innerHTML;
let price = Number(event.target.closest(".item").querySelector(".price").innerHTML);
let id =0;
document.createElement("p")
if(id in cart){
    cart[id].qty++;
}
else{
    let cartItem ={
        itemName: itemName,
        price: price,
        qty: 1
    }
    cart[id] = cartItem;
}
count++;
sum +=price
updateCart();
}


function updateCart(){
    document.getElementById("sum").textContent = sum;
    document.getElementById("count").textContent = count;


}
function cancelItem(event){
    let id = 0;
    let item = event.target.closest("p").querySelector(".cancel").innerHTML;
    item.parentElement.removeChild(item);
    for(let i=0;i<cart.length;i++){
        if(id in cart){
            cart[i].qty--;
        }
        else{
            let removeItem = {
                itemName : itemName,
                price: price,
                qty: 1
            }
            item[i] = removeItem;
        }
    }
    count--;
    sum -=price;
    updateCart();
}
let cancelButton = document.createElement("button")
cancelButton.classList.add("cancel")
cancelButton.textContent = "X"
cancelButton.addEventListener("click", cancelItem);
orderItem.textContent = itemName +" " +price 
orderItem.appendChild(cancelButton)
list.appendChild(orderItem);