let phone = document.querySelectorAll("#type li a"),
    choose = document.querySelector("#choose"),
    obj={}
console.log(phone)
for (let i = 0; i < phone.length; i++) {
    phone[i].onclick = function () {
        //添加选中标签
        let linkBox = document.createElement("a")
        linkBox.classList.add("apple")
        document.getElementById("choose").appendChild(linkBox).innerHTML = phone[i].innerHTML
        if(i<12){
            
        }
    }
   let chooseA = document.querySelector("#choose a")
   

}
