const conArea = document.getElementById('content-area');
const saveBut = document.getElementById('save-btn');
const resetBut = document.getElementById('reset-btn');
const fontInput = document.getElementById('font-size');
const fontColorInput = document.getElementById('font-color');
const bgColorInput = document.getElementById('background-color');

const defaultSettings = {
    bgColor : '#FFFFFF',
    fontColor : '#000000',
    fontSize : 'medium',
};

function applySettings(settings) {
    conArea.style.backgroundColor = settings.bgColor;
    conArea.style.color = settings.fontColor;

    let size;
    if (settings.fontSize == "small") {
        size = '12px';
    } else if (settings.fontSize == "medium") {
        size = '16px';
    } else if (settings.fontSize == "large") {
        size = '20px';
    }
    conArea.style.fontSize = settings.fontSize;

    bgColorInput.value = settings.bgColor;
    fontColorInput.value = settings.fontColor;
    fontInput.value = settings.fontSize;
}

function loadSettings() {
    const saved = localStorage.getItem('userSettings');

    if (saved) {
        const loadedSettings = JSON.parse(saved);
        applySettings(loadedSettings);
    } else {
        applySettings(defaultSettings);
    }
}

function saveSettings(e) {
    e.preventDefault();

    const currentSettings = {
        bgColor: bgColorInput.value,
        fontColor: fontColorInput.value,
        fontSize: fontInput.value
    };

    localStorage.setItem('userSettings', JSON.stringify(currentSettings));

    applySettings(currentSettings);

    alert('Settings saved successfully!');
}

function resetSettings() {
    localStorage.removeItem('userSettings');
    applySettings(defaultSettings);
    alert('Settings have been reset to default.');
}

saveBut.addEventListener('click', saveSettings);
resetBut.addEventListener('click', resetSettings);
document.addEventListener('DOMContentLoaded', loadSettings);