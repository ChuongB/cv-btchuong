const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailEl = document.getElementById("email");
const infoFormEl = document.getElementById("info-form");
const infoDataEl = document.getElementById("info-data");

// handle validate data
function validateEmail(email) {
  if (!email) {
    alert("Vui lòng nhập email");
    return false;
  }

  if (!email.match(regex)) {
    alert("Email không đúng định dạng");
    return false;
  }
  return true;
}

// handle submit form
function submitForm(event) {
  event.preventDefault();
  const email = emailEl.value;
  if (validateEmail(email)) {
    infoFormEl.classList.toggle("hide");
    infoDataEl.classList.toggle("show");
  }
}
// handle toggle job info view
function toggleView(event) {
  event.target.parentNode.classList.toggle("view-more");
}
AOS.init({ duration: 600 });
