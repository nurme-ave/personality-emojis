
// TODO LIST:
// 1. add more features (have emojis saved in localStorage) - ✔️
// 2. different emoji groups saved in localStorage and not hardcoded
// 3. extract if-conditionals in a function (lines 31, 39)
// 4. reduce event handlers on one line depends on the action (push, pop etc) - modifyEmojis("push", emoji)
// 5. redesign the page
// 💻 🚴 🔥 ✔️ 🎵

let myEmojis = [];

const emojiContainer = document.querySelector("#emoji-container");
const emojiInput = document.querySelector("#emoji-input");
const pushBtn = document.querySelector("#push-btn");
const unshiftBtn = document.querySelector("#unshift-btn");
const popBtn = document.querySelector("#pop-btn");
const shiftBtn = document.querySelector("#shift-btn");
const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"));

if (emojisFromLocalStorage) {
  myEmojis = emojisFromLocalStorage;
  render(myEmojis);
}

function render(arr) {
  let emojis = "";
  for (let i = 0; i < arr.length; i++) {
    emojis += `
      <span>
        ${arr[i]}
      </span>
    `
  }
  emojiContainer.innerHTML = emojis;
}

render(myEmojis);

pushBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    render(myEmojis);
  }
});

unshiftBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    render(myEmojis);
  }
});

popBtn.addEventListener("click", () => {
  myEmojis.pop();
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
  render(myEmojis);
});

shiftBtn.addEventListener("click", () => {
  myEmojis.shift();
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
  render(myEmojis);
});