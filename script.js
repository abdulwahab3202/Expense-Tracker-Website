function getInput(){
    let amount = Number(document.getElementById("amount").value);
    let date  = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let typeofitem = document.getElementById("typeofitem").value;
    return [amount,date,category,typeofitem];
}
function addExpenses(){
    let array=getInput();
    insertIntoTable(array);
    changeTotal(array[0]);
}
function changeTotal(amount){
    let total = document.getElementById("total");
    total.textContent = Number(total.textContent) + amount;
}
function insertIntoTable(array){
    let table = document.getElementById("table");
    let tableRow = document.createElement("tr");
    for(let i=0;i<array.length;i++){
        let tableData = document.createElement("td");
        tableData.textContent = array[i];
        tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
}

function displayTable(){
    let table = document.getElementById("table-container");
    let black= document.getElementById("black");
    table.style.display="block";
    black.style.display="block";
    let ttotal=document.getElementById("table-total");
    let total = document.getElementById("total");
    ttotal.textContent=total.textContent;
}
function backToPage(){
    let table = document.getElementById("table-container");
    let black= document.getElementById("black");
    table.style.display="none";
    black.style.display="none";
}