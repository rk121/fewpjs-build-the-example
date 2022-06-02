// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll(".like-glyph");

for (btn of likeBtns) {
  btn.addEventListener("click", (e) => {
    mimicServerCall()
      .then((res) => {
        if (e.target.textContent === EMPTY_HEART) {
          e.target.textContent = FULL_HEART;
          e.target.classList.add("activated-heart");
        } else {
          e.target.textContent = EMPTY_HEART;
          e.target.classList.remove("activated-heart");
        }
      })
      .catch((err) => {
        const errorModal = document.querySelector("#modal");
        errorModal.classList.toggle("hidden");
        setTimeout(() => {
          errorModal.classList.toggle("hidden");
        }, 5000);
      });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
