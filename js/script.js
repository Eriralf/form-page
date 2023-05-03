const showInput = document.getElementById("show-input");
const submitBtn = document.getElementById("btn-submit");
const showTxt = document.getElementById("show-txt");
const minPass = /^[a-zA-Z0-9!@]{6,}$/;

showTxt.addEventListener('input', checkFields);
showInput.addEventListener('input', checkFields);

function checkFields() {
  if (showTxt.value !== '' && showInput.value !== '' && minPass.test(showInput.value)) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

const btnPasswd = document.getElementById("btn-passwd");
const changeImg = document.getElementById("change-img");

window.onload = function () {
  btnPasswd.addEventListener('click', () => {
    if (showInput.type === "password") {
      showInput.type = "text"
      changeImg.src = "assets/icons/eye-slash-light.svg"
    } else {
      showInput.type = "password"
      changeImg.src = "assets/icons/eye-light.svg"
    }
  })
}

function checkEmailField() {
  const showTxtRec = document.getElementById("show-txt-rec");
  const para = document.getElementById("errorMsg")
  if (showTxtRec && showTxtRec.value === '') {
    para.textContent = "E-mail is required!";
  } else {
    para.textContent = '';
  }
}

function checkRegisterFields() {
  const firstName = document.getElementById("first-name");
  const errorName = document.getElementById("error-name");
  const secondName = document.getElementById("second-name");
  const errorName2 = document.getElementById("error-name2");
  const inputEmail = document.getElementById("input-email");
  const errorEmail = document.getElementById("error-email");
  const regPasswd = document.getElementById("reg-passwd");
  const errorPasswd = document.getElementById("error-passwd");
  const regPasswd2 = document.getElementById("reg-passwd2");
  const errorPasswd2 = document.getElementById("error-passwd2");
  const errorCompare = document.getElementById("error-compare");

  if (firstName && firstName.value === '') {
    errorName.textContent = "* Required field!";
  } else {
    errorName.textContent = '';
  }

  if (secondName && secondName.value === '') {
    errorName2.textContent = "* Required field!";
  } else {
    errorName2.textContent = '';
  }

  if (inputEmail && inputEmail.value === '') {
    errorEmail.textContent = "* Required field!";
  } else {
    errorEmail.textContent = '';
  }

  if (regPasswd && regPasswd.value === '') {
    errorPasswd.textContent = "* Required field!";
  } else {
    errorPasswd.textContent = '';
  }

  if (regPasswd2 && regPasswd2.value === '') {
    errorPasswd2.textContent = "* Required field!";
  } else {
    errorPasswd2.textContent = '';
  }

  if (regPasswd.value !== regPasswd2.value) {
    errorCompare.textContent = "Passwords do not match !"
  } else {
    errorCompare.textContent = '';
  }
}


// function executar() {
//   let submit = document.getElementById("btn-submit");
//   let para = document.getElementById("errorMsg")
//     if(submit.type === "submit") {
//       para.textContent = "Your email/password is incorrect!";
//     } else {
//       para.textContent = '';
//         };
// }



