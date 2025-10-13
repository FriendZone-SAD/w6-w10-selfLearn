// โจทย์ข้อที่ 1: การคลิกปุ่มพื้นฐาน (Basic Click Event)
// 🎯 เป้าหมาย: ฝึกใช้ addEventListener กับอีเวนต์ click
// HTML: เพิ่มโค้ดนี้เข้าไปใน <div id="challenge-container">

// <h1>Challenge 1: Basic Click</h1>
// <button id="myBtn">Click Me!</button>
// <p id="message">Waiting for a click...</p>
// JavaScript (เขียนใน main.js):

// เข้าถึง (select) element ปุ่มที่มี id="myBtn" และ <p> ที่มี id="message" 
// เพิ่ม event listener ให้กับปุ่มเพื่อรอฟังอีเวนต์ click 
// เมื่อปุ่มถูกคลิก ให้เปลี่ยนข้อความใน <p> เป็น "Button was clicked!"
const but = document.getElementById('myBtn');
const mes = document.getElementById('message');
but.addEventListener('click', () => {
    mes.textContent = "Button was clicked!";
});

// โจทย์ข้อที่ 2: การใช้ Mouse Events (Mouseover & Mouseout)
// 🎯 เป้าหมาย: ทำความเข้าใจอีเวนต์ที่เกิดจากการเคลื่อนที่ของเมาส์ 
// HTML: เพิ่มโค้ดนี้เข้าไปใน <div id="challenge-container">

// <h1>Challenge 2: Mouse Events</h1>
// <div class="box" id="hoverBox">Hover over me!</div>
// JavaScript (เขียนใน main.js):

// เข้าถึง div ที่มี id="hoverBox"
// เพิ่ม event listener สำหรับอีเวนต์ mouseover: เมื่อเมาส์เคลื่อนที่เข้ามาใน div 
// ให้เปลี่ยนสีพื้นหลังเป็น #28a745 (สีเขียว) และเปลี่ยนข้อความเป็น "Mouse is here!"

// เพิ่ม event listener สำหรับอีเวนต์ mouseout: เมื่อเมาส์เคลื่อนที่ออกจาก div 
// ให้เปลี่ยนสีพื้นหลังกลับไปเป็น #ffc107 (สีเหลือง) และเปลี่ยนข้อความกลับเป็น "Hover over me!"
const box = document.getElementById('hoverBox');
box.addEventListener('mouseover', () => {
    box.style.backgroundColor = '#28a745';
    box.textContent ="Mouse is here!";
})
box.addEventListener('mouseout', () => {
    box.style.backgroundColor = '#ffc107';
    box.textContent = "Hover Over me!"
})

// โจทย์ข้อที่ 3: การดักจับข้อมูลจากคีย์บอร์ด (Keyboard Input Event)
// 🎯 เป้าหมาย: เรียนรู้การใช้อีเวนต์ keyup เพื่อดักจับข้อมูลจากผู้ใช้และเงื่อนไข event.key 
// HTML: เพิ่มโค้ดนี้เข้าไปใน <div id="challenge-container">

// <h1>Challenge 3: Keyboard Input</h1>
// <p>Type something in the box below and press Enter.</p>
// <input type="text" id="textInput" placeholder="Your message...">
// <p id="output">Your message will appear here.</p>
// JavaScript (เขียนใน main.js):

// เข้าถึง <input> ที่มี id="textInput" และ <p> ที่มี id="output"
// เพิ่ม event listener ให้กับ <input> เพื่อรอฟังอีเวนต์ keyup
// ภายในฟังก์ชัน listener ให้ตรวจสอบว่าปุ่มที่ถูกกดคือปุ่ม 'Enter' หรือไม่ (event.key === 'Enter') 
// ถ้าใช่ ให้แสดงค่า (value) ของ <input> ใน <p id="output"> 
const inputBox = document.getElementById('textInput');
const outputBox = document.getElementById('output');
inputBox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        outputBox.textContent = inputBox.value;
        inputBox.value = '';
    }
})

// โจทย์ข้อที่ 4: การใช้ event object (Target vs. CurrentTarget)
// 🎯 เป้าหมาย: ทำความเข้าใจความแตกต่างระหว่าง event.target และ event.currentTarget ผ่าน Event Bubbling
// HTML: เพิ่มโค้ดนี้เข้าไปใน <div id="challenge-container">

// <style>
//     #outer { background-color: lightblue; padding: 30px; }
//     #inner { background-color: lightcoral; padding: 20px; text-align: center; }
// </style>
// <h1>Challenge 4: Target vs CurrentTarget</h1>
// <div id="outer">
//     Outer Div
//     <div id="inner">Inner Div</div>
// </div>
// <p>Target ID: <span id="target-id">?</span></p>
// <p>Current Target ID: <span id="current-target-id">?</span></p>
// JavaScript (เขียนใน main.js):

// เข้าถึง div ที่มี id="outer" และ span ทั้งสองอัน
// เพิ่ม event listener click เพียงตัวเดียวให้กับ <div id="outer">
// เมื่อมีการคลิกเกิดขึ้น (ไม่ว่าจะคลิกที่ outer หรือ inner) ให้อัปเดตข้อความใน span:
// แสดง id ของ event.target ใน <span id="target-id">
// แสดง id ของ event.currentTarget ใน <span id="current-target-id">
// คำใบ้: ลองคลิกที่พื้นที่สีฟ้าและพื้นที่สีแดงสลับกัน แล้วสังเกตความแตกต่างของค่าที่แสดงผล
const outer = document.getElementById('outer');
const tar = document.getElementById('target-id');
const curTar = document.getElementById('current-target-id');
outer.addEventListener('click', (e) => {
    tar.textContent = e.target.id;
    curTar.textContent = e.currentTarget.id;
})

// โจทย์ข้อที่ 5: การเพิ่มและลบ Event Listener
// 🎯 เป้าหมาย: ฝึกการใช้ removeEventListener เพื่อควบคุมการทำงานของอีเวนต์ 
// HTML: เพิ่มโค้ดนี้เข้าไปใน <div id="challenge-container">

// <h1>Challenge 5: Add/Remove Listener</h1>
// <button id="startBtn">Start Logging</button>
// <button id="stopBtn">Stop Logging</button>
// <p>Move your mouse over the window.</p>
// <p id="coords">Mouse Coordinates: X=0, Y=0</p>
// JavaScript (เขียนใน main.js):

// สร้างฟังก์ชันขึ้นมาหนึ่งฟังก์ชัน (เช่น logMousePosition) ที่รับ event object เป็นพารามิเตอร์ 
// และทำการอัปเดตข้อความใน <p id="coords"> เพื่อแสดงค่า event.clientX และ event.clientY
// เมื่อคลิกปุ่ม #startBtn: ให้เพิ่ม mousemove event listener ให้กับ window โดยใช้ฟังก์ชัน logMousePosition ที่สร้างไว้ 
// เมื่อคลิกปุ่ม #stopBtn: ให้ลบ mousemove event listener ออกจาก window 
// สิ่งสำคัญ: คุณไม่สามารถใช้ anonymous function (ฟังก์ชันที่ไม่ระบุชื่อ) กับ addEventListener ได้ 
// หากคุณต้องการจะลบมันออกในภายหลัง
const startBut = document.getElementById('startBtn');
const stopBut = document.getElementById('stopBtn');
const track = document.getElementById('coords')
function logMousePosition(e) {
    const x = e.clientX;
    const y = e.clientY;
    track.textContent = `Mouse Coordinates: X=${x}, Y=${y}`
}
startBut.addEventListener('click', () => {
    window.addEventListener('mousemove', logMousePosition);
});
stopBut.addEventListener('click', () => {
    window.removeEventListener('mousemove', logMousePosition)
})
