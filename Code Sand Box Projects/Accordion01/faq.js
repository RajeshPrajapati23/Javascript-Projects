
function createFaq() {
  let accordian_body = document.querySelector(".accordian_body")



  // faq-section 1
  let sectionCreate = document.createElement("section")
  sectionCreate.className = "faq"
  accordian_body.appendChild(sectionCreate)

  let divQuestionCreate = document.createElement("div")
  divQuestionCreate.className = "question-section"
  sectionCreate.appendChild(divQuestionCreate)

  let h3Create = document.createElement("h3")
  h3Create.className = "que-h3"
  h3Create.textContent = "Who are we?"
  divQuestionCreate.appendChild(h3Create)

  let iCreate = document.createElement("i")
  iCreate.classList = "fa-solid fa-circle-plus"
  divQuestionCreate.appendChild(iCreate)

  let iMinusCreate = document.createElement("i")
  iMinusCreate.classList = "fa-solid fa-circle-minus"
  divQuestionCreate.appendChild(iMinusCreate)

  let pCreate = document.createElement("p")
  pCreate.className = "ans-p"
  pCreate.textContent = "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators."
  sectionCreate.appendChild(pCreate)

  // faq-section 2
  let sectionCreate2 = document.createElement("section")
  sectionCreate2.className = "faq"
  accordian_body.appendChild(sectionCreate2)

  let divQuestionCreate2 = document.createElement("div")
  divQuestionCreate2.className = "question-section"
  sectionCreate2.appendChild(divQuestionCreate2)

  let h3Create2 = document.createElement("h3")
  h3Create2.className = "que-h3"
  h3Create2.textContent = "What do we do?"
  divQuestionCreate2.appendChild(h3Create2)

  let iCreate2 = document.createElement("i")
  iCreate2.classList = "fa-solid fa-circle-plus"
  divQuestionCreate2.appendChild(iCreate2)

  let iMinusCreate2 = document.createElement("i")
  iMinusCreate2.classList = "fa-solid fa-circle-minus"
  divQuestionCreate2.appendChild(iMinusCreate2)

  let pCreate2 = document.createElement("p")
  pCreate2.className = "ans-p"
  pCreate2.textContent = "Building learning communities with Our Affordable & Competent Courses"
  sectionCreate2.appendChild(pCreate2)

  // faq-section 3
  let sectionCreate3 = document.createElement("section")
  sectionCreate3.className = "faq"
  accordian_body.appendChild(sectionCreate3)

  let divQuestionCreate3 = document.createElement("div")
  divQuestionCreate3.className = "question-section"
  sectionCreate3.appendChild(divQuestionCreate3)

  let h3Create3 = document.createElement("h3")
  h3Create3.className = "que-h3"
  h3Create3.textContent = "Are the community classes boring?"
  divQuestionCreate3.appendChild(h3Create3)

  let iCreate3 = document.createElement("i")
  iCreate3.classList = "fa-solid fa-circle-plus"
  divQuestionCreate3.appendChild(iCreate3)

  let iMinusCreate3 = document.createElement("i")
  iMinusCreate3.classList = "fa-solid fa-circle-minus"
  divQuestionCreate3.appendChild(iMinusCreate3)

  let pCreate3 = document.createElement("p")
  pCreate3.className = "ans-p"
  pCreate3.textContent = "No, not at all!!!"
  sectionCreate3.appendChild(pCreate3)





  function showFaq() {

    let selectSection = document.querySelectorAll(".faq")
    console.log(selectSection);


    selectSection.forEach((val) => {
      val.addEventListener("click", function () {
        val.classList.toggle("active")
      })
    })
  }
  showFaq()

}
createFaq()



