function calcCartPrice () {
    const totalPriceEl=document.querySelector(".total-price");
    const cartItems=document.querySelectorAll(".cart-item");
    const deliveryCost=document.querySelector(".delivery-cost");
    const cartDeliveryEl=document.querySelector("[data-cart-delivery]") 

    let totalPrice=0;
    cartItems.forEach(function(item){
        const amountEl=item.querySelector("[data-counter]");
        const priceElEl=item.querySelector(".price__currency");
        const currentPrice=parseInt(amountEl.innerText)*parseInt(priceElEl.innerText);
        totalPrice+=currentPrice;
    })
    totalPriceEl.innerText=totalPrice;
    if (totalPrice>=60){
         deliveryCost.classList.add("free");
         deliveryCost.innerText="FREE";
    }else {
        deliveryCost.classList.remove("free");
        deliveryCost.innerText="25€";
    }
    if (totalPrice>0){
        cartDeliveryEl.classList.remove("none");
    }else{
        cartDeliveryEl.classList.add("none");
    }
}