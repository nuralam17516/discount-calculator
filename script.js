function getDiscountValue() {
    const totalPriceValue = document.getElementById('total-price');
    const totalPriceText = totalPriceValue.value;
    const totalPrice = parseFloat(totalPriceText);
    totalPriceValue.value = "";

    const totalDiscountValue = document.getElementById('discount-span');
    const totalDiscountText = totalDiscountValue.value;
    const discountAmount = parseFloat(totalDiscountText);
    totalDiscountValue.value = "";

    const totalPayAmount = totalPrice - (totalPrice * (discountAmount / 100));

    const payAmount = document.getElementById('pay-span');
    payAmount.innerText = totalPayAmount;

}

// coupon function here------->
function getDiscountCouponValue() {
    const totalPriceValue = document.getElementById('price-field');
    const totalPriceText = totalPriceValue.value;
    const totalPrice = parseFloat(totalPriceText);
    totalPriceValue.value = "";

    const totalCouponValue = document.getElementById('coupon-field');
    const totalCouponText = totalCouponValue.value;
    totalCouponValue.value = "";
    if (totalCouponText == "DISC30") {
        const totalPayAmount = totalPrice - (totalPrice * (30 / 100));
        const payAmount = document.getElementById('coupon-pay-span');
        payAmount.innerText = totalPayAmount;
    }
    if (totalCouponText !== "DISC30") {
        alert('Please insert valid coupon number');
        return;
    }
}