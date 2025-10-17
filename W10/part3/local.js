// 🎯 Tasks
// 1. Save Key/Value → ใช้ localStorage.setItem(key, value)
// 2. Get Key → ใช้ localStorage.getItem(key)
// 3. Delete Key → ใช้ localStorage.removeItem(key)
// 4. Clear All → ใช้ localStorage.clear()
// 5. (Bonus 🌟) → เมื่อโหลดหน้าเว็บ ให้แสดงจำนวนครั้งที่เปิดเว็บโดยนับจาก localStorage
// 💡 Example:
// let count = localStorage.getItem('visit');
// if (!count) count = 0;
// localStorage.setItem('visit', ++count);
// document.getElementById('output').textContent = `Visited ${count} times.`;
const keyInput = document.getElementById("local-key");
const valueInput = document.getElementById("local-value");
const output = document.getElementById("output");
const setBut = document.getElementById('save-local');
const getBut = document.getElementById('get-local');
const delBut = document.getElementById('delete-local');
const clearBut = document.getElementById('clear-local');

function appendOutput(msg) {
    if (!output.innerText) {
        output.textContent = msg;
    } else {
        output.insertAdjacentHTML('beforeend', '<br>' + msg);
    }
}

setBut.addEventListener('click', () => {
    const key = keyInput.value;
    const value = valueInput.value;
    localStorage.setItem(key, value);
    appendOutput(`LocalStorage set: ${key}=${value}`);
})

getBut.addEventListener('click', () => {
    const key = keyInput.value;
    const value = localStorage.getItem(key);
    appendOutput(value ? `LocalStorage retrieved: ${key}=${value}` : `LocalStorage not found: ${key}`);
})

delBut.addEventListener('click', () => {
    const key = keyInput.value;
    localStorage.removeItem(key);
    appendOutput(`LocalStorage deleted: ${key}`);
})

clearBut.addEventListener('click', () => {
    localStorage.clear();
    appendOutput(`LocalStorage cleared`);
})

// Bonus: Count visits
let count = localStorage.getItem('visit');
localStorage.setItem('visit', ++count);
appendOutput(`Visited ${count} times.`);