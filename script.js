// get inner text element by id
function getInnerText(id){
    return document.getElementById(id).innerText;
}
// set inner text element by id
function setInnerText(id, text){
    return document.getElementById(id).innerText = text;
}
// price display handler
function priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge){
    const totalPrice = bestPrice+extraMemoryCost+extraStorageCost+deliveryCharge;
    setInnerText('total-price',totalPrice);
    setInnerText('discount-price',totalPrice);
}

// memory handler 
function memoryHandler(memoryType){
    const bestPrice = 1299;
    const extraStorageCost = parseInt(getInnerText('extra-storage-cost'));
    const deliveryCharge = parseInt(getInnerText('delivery-charge'));
    if(memoryType == '8GB'){
        const extraMemoryCost = 0;
        setInnerText('extra-memory-cost',extraMemoryCost);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    if(memoryType == '16GB'){
        const extraMemoryCost = 180;
        setInnerText('extra-memory-cost',extraMemoryCost);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    applyPromoCodeClear();
}
// storage handler 
function storageHandler(storageType){
    const bestPrice = 1299;
    const extraMemoryCost = parseInt(getInnerText('extra-memory-cost'));
    const deliveryCharge = parseInt(getInnerText('delivery-charge'));
    if(storageType == '256GB'){
        const extraStorageCost = 0;
        setInnerText('extra-storage-cost',extraStorageCost);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    if(storageType == '512GB'){
        const extraStorageCost = 100;
        setInnerText('extra-storage-cost',extraStorageCost);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    if(storageType == '1TB'){
        const extraStorageCost = 180;
        setInnerText('extra-storage-cost',extraStorageCost);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    applyPromoCodeClear();
}

// delivery handler

function deliveryHandler(deliveryType){
    const bestPrice = 1299;
    const extraMemoryCost = parseInt(getInnerText('extra-memory-cost'));
    const extraStorageCost = parseInt(getInnerText('extra-storage-cost'));
    if(deliveryType == 'FREE'){
        const deliveryCharge = 0;
        setInnerText('delivery-charge',deliveryCharge);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    if(deliveryType == 'PAID'){
        const deliveryCharge = 20;
        setInnerText('delivery-charge',deliveryCharge);
        priceDisplay(bestPrice,extraMemoryCost,extraStorageCost,deliveryCharge);
    }
    applyPromoCodeClear();
}

// apply promo code get 20% discount

function applyPromoCode(){
    const total = document.getElementById('total-price').innerText;
    const promoCode = document.getElementById('promo-code').value;
    if(promoCode == 'stevekaku'){
        const afterApplyPromoCode = parseInt(total)*0.80;
        document.getElementById('discount-price').innerText = afterApplyPromoCode;
        setInnerText('promoHelp','Promo Code Applied');
        document.getElementById('promoHelp').className = 'text-success';

    }else{
        setInnerText('promoHelp','Promo Code Not Valid');
        setInnerText('discount-price',total);
        document.getElementById('promoHelp').className = 'text-danger';
    }
}

// promo code clear
function applyPromoCodeClear(){
    const total = getInnerText('total-price');
    setInnerText('discount-price', total);
    setInnerText('promoHelp','');
    document.getElementById('promo-code').value = '';
}


// // memory handler for 8GB unified memory
// function memoryHandler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = 0;
//     document.getElementById('extra-memory-cost').innerText = extraMemoryCost;
//     const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
//     console.log(extraStorageCost)
//     const deliveryCharge = document.getElementById('delivery-charge').innerText;
//     const totalPrice = bestPrice+extraMemoryCost+parseInt(extraStorageCost)+parseInt(deliveryCharge);

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }
// // memory handler for 16GB unified memory
// function memory2Handler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = 180;
//     document.getElementById('extra-memory-cost').innerText = extraMemoryCost;
//     const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
//     console.log(extraStorageCost)
//     const deliveryCharge = document.getElementById('delivery-charge').innerText;
//     const totalPrice = bestPrice+extraMemoryCost+parseInt(extraStorageCost)+parseInt(deliveryCharge);

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }

// // 256GB SSD storage
// function storageHandler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
//     const extraStorageCost = 0;
//     document.getElementById('extra-storage-cost').innerText = extraStorageCost;
//     const deliveryCharge = document.getElementById('delivery-charge').innerText;
//     const totalPrice = bestPrice+parseInt(extraMemoryCost)+extraStorageCost+parseInt(deliveryCharge);

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }
// // 512GB SSD storage
// function storage2Handler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
//     const extraStorageCost = 100;
//     document.getElementById('extra-storage-cost').innerText = extraStorageCost;
//     const deliveryCharge = document.getElementById('delivery-charge').innerText;
//     const totalPrice = bestPrice+parseInt(extraMemoryCost)+extraStorageCost+parseInt(deliveryCharge);

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }
// // 1TB SSD storage
// function storage3Handler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
//     const extraStorageCost = 180;
//     document.getElementById('extra-storage-cost').innerText = extraStorageCost;
//     const deliveryCharge = document.getElementById('delivery-charge').innerText;
//     const totalPrice = bestPrice+parseInt(extraMemoryCost)+extraStorageCost+parseInt(deliveryCharge);

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }
// // Friday, Aug 25 FREE Primary Delivery
// function deliveryHandler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
//     const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
//     const deliveryCharge = 0;
//     document.getElementById('delivery-charge').innerText = deliveryCharge;
//     const totalPrice = bestPrice+parseInt(extraMemoryCost)+parseInt(extraStorageCost)+deliveryCharge;

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }
// // Friday, Aug 21 Delivery charge $20
// function delivery2Handler(){
//     const bestPrice = 1299;
//     const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
//     const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
//     const deliveryCharge = 20;
//     document.getElementById('delivery-charge').innerText = deliveryCharge;
//     const totalPrice = bestPrice+parseInt(extraMemoryCost)+parseInt(extraStorageCost)+deliveryCharge;

//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('discount-price').innerText = totalPrice;
// }

// // apply promo code get 20% discount

// function applyPromoCode(){
//     const total = document.getElementById('total-price').innerText;
//     const promoCode = document.getElementById('promo-code').value;
//     if(promoCode == 'stevekaku'){
//         const afterApplyPromoCode = parseInt(total)*0.80;
//         document.getElementById('discount-price').innerText = afterApplyPromoCode;
//         document.getElementById('promoHelp').innerText = 'Promo Code Applied';
//         document.getElementById('promoHelp').className = 'text-success';

//     }else{
//         document.getElementById('promoHelp').innerText = 'Promo Code Not Valid.';
//         document.getElementById('discount-price').innerText = total;
//         document.getElementById('promoHelp').className = 'text-danger';
//     }
// }




