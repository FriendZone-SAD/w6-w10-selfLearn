// 🎯 Tasks
// 1. เมื่อกด "Save" → เก็บค่าใน sessionStorage ด้วย setItem(key, value)
// 2. เมื่อกด "Get" → ดึงค่าจาก sessionStorage แล้วแสดงใน <p id="output">
// 3. เมื่อกด "Clear" → ใช้ sessionStorage.clear() เพื่อล้างทั้งหมด

// 💡 Hint:
// sessionStorage.setItem('username', 'krit');
// sessionStorage.getItem('username');
// sessionStorage.removeItem('username');
// sessionStorage.clear();
const sessionKeyInput = document.getElementById("session-key");
const sessionValueInput = document.getElementById("session-value");
const output = document.getElementById("output");
const setBut = document.getElementById('save-session');
const getBut = document.getElementById('get-session');
const clearBut = document.getElementById('clear-session');

function appendOutput(msg) {
    if (!output.innerHTML) {
        output.textContent = msg;
    } else {
        output.insertAdjacentHTML('beforeend', '<br>' + msg);
    }
}

setBut.addEventListener('click', () => {
    const name = sessionKeyInput.value;
    const value = sessionValueInput.value;
    sessionStorage.setItem(name, value);
    appendOutput('Session storage set: ' + name + '=' + value);
})

getBut.addEventListener('click', () => {
    const name = sessionKeyInput.value;
    const value = sessionStorage.getItem(name);
    appendOutput(value ? `Session storage retrieved: ${name}=${value}` : `Session storage not found: ${name}`);
})

clearBut.addEventListener('click', () => {
    sessionStorage.clear();
    appendOutput('Session storage cleared');
});