 document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log("testing");
    })
 });
// document.addEventListener('click', (event) => {
//     const button = event.target.closest('.added-to-cart-confirmation');
//     if (button) {
//         console.log("testing");
//     }
// });