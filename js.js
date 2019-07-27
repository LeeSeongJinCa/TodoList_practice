/*
!1. input 입력 + add버튼 -> li에 추가됨
!2. li를 클릭 -> 클릭한 li에 배경이 진해짐 + text-decoration: line-through + 왼쪽 체크 표시 추가
!3. 오른쪽 x를 누르면 li삭제
*/

/*
!Click -> x -> delete, this.div */
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var parent = this.parentElement;
        parent.style.display = 'none';
    }
}

/*
!Click -> li -> add, class="checked" */
var ul = document.querySelector('#content_ul');
ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);


/*
!Add list */
function newList() {
    var ul_list = document.querySelector("#content_ul");
    var input = document.getElementById("input").value;
    var trim = input.trim();
    if (trim === '') {
        alert("Input anything");
        document.getElementById("input").value = "";
    }
    else {
        var ul = document.getElementById('content_ul');
        var li = document.createElement('li');
        var x = document.createElement('span');
        x.setAttribute('class', 'close');
        x.innerHTML = 'x';
        li.setAttribute('class', 'content')
        li.innerHTML = input;
        li.appendChild(x);
        ul.appendChild(li);
        document.getElementById("input").value = "";
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var parent = this.parentElement;
                parent.style.display = 'none';
            }
        }
    }
    document.getElementById("input").focus();
}

var add = document.getElementById('add_btn');
add.addEventListener('click', () => {
    newList();
})
function enterkey() {
    if (window.event.keyCode == 13) {
        newList();
    }
}

/* 
localStorage.setItem('name', 'zerocho');
localStorage.setItem('birth', 1994);
localStorage.getItem('name'); // zerocho
localStorage.getItem('birth'); // 1994 (문자열)
localStorage.removeItem('birth');
localStorage.getItem('birth'); // null (삭제됨)
localStorage.clear(); // 전체 삭제
*/












