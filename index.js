const inputs = document.querySelectorAll(".box input");
const cardholderName = document.querySelector(".name");
const cardNumber = document.querySelector(".card_number_el");
const month = document.querySelector(".month");
const Year = document.querySelector(".year");
const Cvc = document.querySelector(".cvc_el");

inputs.forEach(input => {
     input.addEventListener("focus", function () {
          inputs.forEach(input => {
               const parent = input.parentElement;
               parent.classList.remove("focus")
          })
          const parent = input.parentElement;
          parent.classList.add("focus")
     });
     inputs.forEach(input => {
          input.addEventListener("input", function () {
               switch (input.id) {

                    case "cardholder_name":
                         cardholderName.innerHTML = input.value
                         break;

                    case "card_number":
                         var value = input.value;
                         if(value.length%4 == 0){
                              var groups = value.match(/.{1,4}/g);
                              cardNumber.innerHTML = groups.join(" ");
                         }
                         break;

                    case "month":
                         month.innerHTML = `${input.value}/`
                         break;

                    case "year":
                         Year.innerHTML = input.value
                         break;

                    default:
                         Cvc.innerHTML = input.value
                         break;
               }
          })
     })
})
