let titlePrograms = document.querySelectorAll(".faq-inner__list-question");
let dropDowns = document.querySelectorAll(".faq-inner__list-item-descr");
let minusIcon = document.querySelectorAll(".faq-inner__list-item-svg-minus");
let plusIcon = document.querySelectorAll(".faq-inner__list-item-svg-plus");

titlePrograms.forEach((titleProgram, index) => {
    titleProgram.addEventListener("click", () => {
        dropDowns[index].classList.toggle("faq-inner__list-item-descr-active");
        titlePrograms[index].classList.toggle("faq-inner__list-question-active");
        minusIcon[index].classList.toggle("svg-minus-active");
        plusIcon[index].classList.toggle("svg-plus-active");
    });
});


(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();