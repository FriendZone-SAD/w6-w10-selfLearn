const cookieNameInput = document.getElementById("cookie-name");
const cookieValueInput = document.getElementById("cookie-value");
const output = document.getElementById("output");
const setBut = document.getElementById('set-cookie');
const getBut = document.getElementById('get-cookie');
const delBut = document.getElementById('delete-cookie');

function appendOutput(msg) {
    if (!output.innerHTML) {
        output.textContent = msg;
    } else {
        output.insertAdjacentHTML('beforeend', '<br>' + msg);
    }
}

setBut.addEventListener("click", () => {
    const name = cookieNameInput.value;
    const value = cookieValueInput.value;
    document.cookie = `${name}=${value}; max-age=60`;
    appendOutput(`Cookie set: ${name}=${value}`);
});

getBut.addEventListener("click", () => {
    const name = cookieNameInput.value;
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(row => row.startsWith(name + "="));
    appendOutput(cookie ? `Cookie retrieved: ${cookie}` : `Cookie not found: ${name}`);
});

delBut.addEventListener("click", () => {
    const name = cookieNameInput.value;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    appendOutput(`Cookie deleted: ${name}`);
});
