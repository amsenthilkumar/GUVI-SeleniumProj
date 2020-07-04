var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["gender"] = document.getElementById("gender").value;
   
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    formData["date"] = document.getElementById("date").value;
    formData["checkbox"] = document.getElementById("checkbox").value;
    formData["select"] = document.getElementById("select").value;
    formData["color"] = document.getElementById("color").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.checkbox;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.select;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.color;
    cell9 = newRow.insertCell(9);

    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    document.getElementById("date").value = "";
    document.getElementById("checkbox").value = "";
    document.getElementById("select").value = "";
    document.getElementById("color").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("checkbox").value = selectedRow.cells[6].innerHTML;
    document.getElementById("select").value = selectedRow.cells[7].innerHTML;
    document.getElementById("color").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.salary;
    selectedRow.cells[4].innerHTML = formData.city;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.checkbox;
    selectedRow.cells[7].innerHTML = formData.select;
    selectedRow.cells[8].innerHTML = formData.color;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function onSelect() {
    var ele = document.getElementsByName("gender");
    for(i =0;i<ele.length;i++){
        if(ele[i].checked){
            formData["gender"] = document.getElementById("male").value;    
        }else{
        formData["gender"] = document.getElementById("female").value;
        }
    }
    
}