let timeoutId;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{

        const confirmation = document.querySelector('.add-to-cart-confirmation');

        confirmation.innerHTML =
        `<img class = "tickImage-css" src="img/tick.png">
         <span>Added</span>`;

         clearTimeout(timeoutId); 
         
         timeoutId = setTimeout(()=>{
            document.querySelector('.add-to-cart-confirmation').innerHTML = "";
        },2000);
    });
});
// document.addEventListener('click', (event) => {
//     const button = event.target.closest('.added-to-cart-confirmation');
//     if (button) {
//         console.log("testing");
//     }
// });