let titlePrograms = document.querySelectorAll(".faq-inner__list-question");
let dropDowns = document.querySelectorAll(".faq-inner__list-item-descr");
let minusIcon = document.querySelectorAll(".faq-inner__list-item-svg-minus");
let plusIcon = document.querySelectorAll(".faq-inner__list-item-svg-plus");


// Add a click event listener to each title element
titlePrograms.forEach((titleProgram, index) => {
    titleProgram.addEventListener("click", () => {
        // Toggle the "spec-programs-item__content-active" class on the corresponding dropdown element
        dropDowns[index].classList.toggle("faq-inner__list-item-descr-active");
        titlePrograms[index].classList.toggle("faq-inner__list-question-active");
        minusIcon[index].classList.toggle("svg-minus-active");
        plusIcon[index].classList.toggle("svg-plus-active");
    });
});