// 點擊按鈕檢查是否有輸入
const inputList = document.querySelector('.inputList');
const add = document.getElementById('addTake');
const list = document.querySelector('.hasList');


function handleAdd() {
    if (inputList.value.trim() === "") {
        alert('Please enter a task');
        return;
    }

    const newList = document.createElement('li');
    newList.className = 'newList';
    newList.innerHTML =
        '<p>' + inputList.value + '</p>' +
        '<button type="button" class="deletTake">Delete</button>';

    document.querySelector('.hasList').appendChild(newList);
    inputList.value = "";
}

add.onclick = handleAdd;
inputList.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        handleAdd();
    }
});

// 刪除（事件委派）
list.onclick = function (e) {
    //檢查是否有刪除按鈕
    if (e.target.classList.contains('deletTake')) {
        //刪除父層(也就是li)
        if (confirm('確定要刪除嗎？')) {
            e.target.parentElement.remove();
        }
    }
    
     // 切換完成 / 未完成
    const li = e.target.closest('li');
    if (li && li.classList.contains('newList')) {
        li.classList.toggle('okList');
    }
};