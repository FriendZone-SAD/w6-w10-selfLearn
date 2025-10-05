const taskList = document.getElementById('task-list');

// 1️⃣ Add Task (Create Node + Event)
// เมื่อกดปุ่ม #add-task →
// ดึงค่าจาก <input>
// สร้าง <li> ใหม่ แล้วเพิ่มเข้าใน <ul id="task-list">
// เคลียร์ช่อง input หลังเพิ่มเสร็จ
const addBut = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');

addBut.addEventListener('click', () => {
    console.log(taskInput.value);
    if (taskInput.value.trim() !== '') {
        const newLine = document.createElement('li');
        newLine.textContent = taskInput.value;
        taskList.appendChild(newLine);
    }
})

// 2️⃣ Mark as Done (Toggle Class)
// เมื่อคลิก <li> ตัวใด ให้ toggle class "done" เพื่อขีดฆ่าข้อความนั้น
// 💡 ใช้ addEventListener('click', …) กับ <ul> แล้วเช็ก event.target.tagName === 'LI'
// (อันนี้คือ event delegation)
// taskList.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('done')
//     }
// })

// 3️⃣ Delete Task (Remove Node)
// เมื่อคลิก <li> ที่มี class "done" → ให้ลบออกจาก list ทันที
taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        if (event.target.classList.value === 'done') {
            event.target.remove();
        }
        else {
            event.target.classList.add('done');
        }
    }
})

// 4️⃣ Clear All Tasks
// เมื่อกดปุ่ม #clear-all → ลบ <li> ทั้งหมดออกจาก <ul>
const clearBut = document.getElementById('clear-all');
clearBut.addEventListener('click', () => {
    taskList.innerHTML = '';
})

// 5️⃣ Bonus – Keyboard Add
// ถ้าผู้ใช้พิมพ์ในช่อง <input> แล้วกด Enter (key = "Enter") → ให้ทำเหมือนกับกดปุ่ม Add Task
taskInput.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        if (taskInput.value.trim() !== '') {
        const newLine = document.createElement('li');
        newLine.textContent = taskInput.value;
        taskList.appendChild(newLine);
    }
    }
})