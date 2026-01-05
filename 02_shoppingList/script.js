const inputShopping = document.querySelector('.inputShopping');
const btn = document.getElementById('addShopping');
const list = document.querySelector('.shoppingList');


//新增函式
function addList() {
    //判斷input的輸入是否為空
    if (inputShopping.value.trim() === "") {
        alert('請輸入名稱');
        return;
    }
    //動態新增項目
    const newlist = document.createElement('li')
    newlist.className = 'shoppingList'
    newlist.innerHTML =
        '<p>' + inputShopping.value + '</p>' +
        '<button type="button" class="deleteBtn">Delete</button>';

    document.querySelector('.shoppingList').appendChild(newlist);
    inputShopping.value = '';
}

//監控點擊動作
btn.onclick = addList;
//新增點擊監聽enter
inputShopping.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addList();
    }
})

//刪除
//從清單中找出是否有刪除按鈕
list.onclick = function (e) {
    if (e.target.classList.contains('deleteBtn')) {
        if (confirm('確定要刪除嗎？')) {
            e.target.closest('li').remove();
        }
        return;
    }
    //切換完成 / 未完成
    const li = e.target.closest('li');
    const btn = li.querySelector('button');
    if (li) {
        li.classList.toggle('completed');
        btn.classList.toggle('doneBtn');
    }
    //文字切換
    if (li.classList.contains('completed')) {
        btn.textContent = 'Done';
    } else {
        btn.textContent = 'Delete';
    }
};

