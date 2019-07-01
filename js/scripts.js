
var link = document.querySelector(".feedback-button");


var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".modal-close");

var user_name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var storage_name = "";
var storage_email = "";

try {
  storage_name = localStorage.getItem("name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage_email) {
    email.value = storage_email;
  } else {
    email.focus();
  }

  if (storage_name) {
    name.value = storage_name;
  } else {
    user_name.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!user_name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", user_name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
