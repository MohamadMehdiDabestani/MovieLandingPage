const pBackToTop = document.querySelector(".back-top p");
const btnBackToTop = document.querySelector(".back-top button");
const contactUsForm = document.querySelector(".contactus-form");
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
pBackToTop.addEventListener("click", backToTop);
btnBackToTop.addEventListener("click", backToTop);

//  form validation

const requiredFields = contactUsForm.querySelectorAll(".required");
requiredFields.forEach((el) =>
  el.addEventListener("input", (e) => {
    let invalidations = Array.from(requiredFields).filter(
      (el) => el.value.length === 0
    );
    let submitBtn = document.querySelector(".contactus-form button");
    if (invalidations.length === 0) {
      submitBtn.classList.remove("disable");
      submitBtn.classList.add("active");
    } else {
      submitBtn.classList.add("disable");
      submitBtn.classList.remove("active");
    }
  })
);
document.querySelector(".contactus-form").addEventListener("submit", (e) => {
  let invalidations = Array.from(requiredFields).filter(
    (el) => el.value.length === 0
  );
  if (invalidations.length > 0) {
    invalidations.forEach((el) =>{
        el.classList.add('error-validation')
    })
    e.preventDefault();
  }
});
