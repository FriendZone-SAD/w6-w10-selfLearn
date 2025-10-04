// Add Item
// เมื่อกดปุ่ม #add-item → เพิ่ม <li> ใหม่เข้าไปท้ายสุดใน #shopping-list (เช่น "New Item")
const shopListElement = document.getElementById("shopping-list");
const addBut = document.getElementById('add-item');
// const newItem = document.createElement('li')
// newItem.textContent = 'Pizza'

addBut.addEventListener('click', () => {
    const itemName = prompt("Enter item name:");
    if (itemName) {
        const newItem = document.createElement("li");
        newItem.textContent = itemName;
        shopListElement.appendChild(newItem);
    }
});

// Highlight Second
// เมื่อกดปุ่ม #highlight-second → หา <li> ตัวที่สอง แล้วเพิ่ม class "highlight" ให้มัน
const hlBut = document.getElementById('highlight-second');
hlBut.addEventListener('click', () => {
    const ls = shopListElement.getElementsByTagName('li');
    if (ls.length >= 2) {
        ls[1].classList.add('highlight');
    }
})

// Replace First
// เมื่อกดปุ่ม #replace-first → ลบ <li> ตัวแรก แล้วแทนที่ด้วย <li>Replaced Item</li>
const reBut = document.getElementById('replace-first');
reBut.addEventListener('click', () => {
    const firstChild = shopListElement.firstElementChild;
    const replaceName = prompt('Enter new item name:');
    if (firstChild) {
        firstChild.textContent = replaceName;
    }
})

// Parent Traversal
// เขียนโค้ดที่เข้าถึง #shopping-list แล้ว console.log parent element ของมัน
console.log(shopListElement.parentElement);

// Sibling Traversal
// เขียนโค้ดที่เข้าถึง <li>Bread</li> แล้ว console.log next sibling (ควรเป็น "Eggs")
const ls = shopListElement.getElementsByTagName('li');
for (let i = 0; i < ls.length; i++){
    if (ls[i].textContent === 'Bread') console.log(ls[i].nextElementSibling.textContent);
}