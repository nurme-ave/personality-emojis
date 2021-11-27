// TODO LIST:
// 1. add more features (have emojis saved in localStorage) - ✔️
// 2. different emoji groups saved in localStorage and not hardcoded
// 3. extract if-conditionals in a function (lines 31, 39)
// 4. reduce event handlers on one line depends on the action (push, pop etc) - modifyEmojis("push", emoji)
// 5. redesign the page
// 💻 🚴 🔥 ✔️ 🎵

let myEmojis = []

const emojiContainer = document.querySelector('#emoji-container')
const emojiInput = document.querySelector('#emoji-input')
const pushBtn = document.querySelector('#push-btn')
const unshiftBtn = document.querySelector('#unshift-btn')
const popBtn = document.querySelector('#pop-btn')
const shiftBtn = document.querySelector('#shift-btn')
const emojisFromLocalStorage = JSON.parse(localStorage.getItem('myEmojis'))

if (emojisFromLocalStorage) {
  myEmojis = emojisFromLocalStorage
  render(myEmojis)
}

function render(arr) {
  let emojis = ''
  for (let i = 0; i < arr.length; i++) {
    emojis += `
      <span>
        ${arr[i]}
      </span>
    `
  }
  emojiContainer.innerHTML = emojis
}

function modify(action) {
  if (emojiInput.value) {
    myEmojis[action](emojiInput.value)
    emojiInput.value = ''
  } else {
    myEmojis[action]()
  }
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
  render(myEmojis)
}

pushBtn.addEventListener('click', () => {
  modify('push')
})

unshiftBtn.addEventListener('click', () => {
  modify('unshift')
})

popBtn.addEventListener('click', () => {
  modify('pop')
})

shiftBtn.addEventListener('click', () => {
  modify('shift')
})
