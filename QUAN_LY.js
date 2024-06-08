function roomManagement() {
    document.getElementById("Room_management").style.display = "flex";
    document.getElementById("Actor_management").style.display = "none";
    document.getElementById("Service_management").style.display = "none";
    document.getElementById("Bill_management").style.display = "none";
    //thiết lập chiều cao
    let managerItem1Elements = document.querySelectorAll('.manager_item1');
    managerItem1Elements.forEach(function(element) {
        element.style.height = "40%";
    });

    var managerItem2Elements = document.querySelectorAll('.manager_item2');
    managerItem2Elements.forEach(function(element) {
        element.style.height = "60%";
    });
}

function actorManagement() {
    document.getElementById("Room_management").style.display = "none";
    document.getElementById("Actor_management").style.display = "flex";
    document.getElementById("Service_management").style.display = "none";
    document.getElementById("Bill_management").style.display = "none";
    // document.querySelector("td:nth-child(3)").style.color = "rgb(92, 92, 92)";
    // document.querySelector("td:nth-child(4)").style.color = "red";

    let managerItem1Elements = document.querySelectorAll('.manager_item1');
    managerItem1Elements.forEach(function(element) {
        element.style.height = "20%";
    });

    var managerItem2Elements = document.querySelectorAll('.manager_item2');
    managerItem2Elements.forEach(function(element) {
        element.style.height = "80%";
    });
}

function serviceManagement(){
    document.getElementById("Room_management").style.display = "none";
    document.getElementById("Actor_management").style.display = "none";
    document.getElementById("Service_management").style.display = "flex";
    document.getElementById("Bill_management").style.display = "none";
    // document.querySelector("td:nth-child(3)").style.color = "rgb(92, 92, 92)";
    // document.querySelector("td:nth-child(4)").style.color = "red";

    let managerItem1Elements = document.querySelectorAll('.manager_item1');
    managerItem1Elements.forEach(function(element) {
        element.style.height = "20%";
    });

    var managerItem2Elements = document.querySelectorAll('.manager_item2');
    managerItem2Elements.forEach(function(element) {
        element.style.height = "80%";
    });
}

function billManagement(){
    document.getElementById("Room_management").style.display = "none";
    document.getElementById("Actor_management").style.display = "none";
    document.getElementById("Service_management").style.display = "none";
    document.getElementById("Bill_management").style.display = "flex";
    // document.querySelector("td:nth-child(3)").style.color = "rgb(92, 92, 92)";
    // document.querySelector("td:nth-child(4)").style.color = "red";

    let managerItem1Elements = document.querySelectorAll('.manager_item1');
    managerItem1Elements.forEach(function(element) {
        element.style.height = "20%";
    });

    var managerItem2Elements = document.querySelectorAll('.manager_item2');
    managerItem2Elements.forEach(function(element) {
        element.style.height = "80%";
    });
}

function MyForm(ID){
    document.getElementById(ID).style.display= "Flex";
}
function CloseForm(ID){
    document.getElementById(ID).style.display="none";
}

function TrangChu(){
    window.location.href="./Page.html";
}
function Update(element) {
    // Get the parent row of the clicked element
    var row = element.parentElement.parentElement;
    let Titles = row.parentElement.querySelector('tr').querySelectorAll('th');
    let Container = document.getElementById("Update_container");
    console.log(element.closest('.manager_container').id);
    // Clear the container content before updating
    Container.innerHTML = '';

    // Add title for the form
    Container.innerHTML += `
        <div class="Form_item" style="justify-content: center;">
            <p style="font-weight: 600;font-size: 24px;color: black;">Thông tin</p>
        </div>
    `;
    // Iterate through each title and corresponding cell in the row
    Titles.forEach(function(title, index) {
        if(index != Titles.length-1 && index != 0)
        {
            Container.innerHTML += `
            <div class="Form_item">
                <p>${title.innerText}</p>
                <input type="text" class="input" value="${row.cells[index].innerText}">
            </div>
        `;
        }
    });
    Container.innerHTML+= `
        <div class="Form_item" style="justify-content: center;margin-top: 20px;">
            <button class="button1">Chỉnh sửa</button>
            <button class="button1" onclick="CloseForm('Update')">Thoát</button>
        </div>
    `;

    // Correcting the display property
    document.getElementById("Update").style.display = "flex";
}
