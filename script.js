function validateForm(){
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var year = document.getElementById("year").value;
    var address = document.getElementById("address").value;

    if(name == "" || department == "" || year == "" || address == ""){
        alert("need to fill the missing field");
        return false;
    }
    return true;
}

function showData(){
    var stdList;
    if(localStorage.getItem("stdList") == null){
        stdList = [];
    }
    else{
        stdList = JSON.parse(localStorage.getItem("stdList"));
    }

    var html = "";

    stdList.forEach(function (element,index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.department + "</td>";
        html += "<td>" + element.year + "</td>";
        html += "<td>" + element.address + "</td>";
        html += '<td><button onclick="deleteData(' +index +')"class=" btn btn-danger m-2">Delete</button><button onclick="updateData('+ index +')"class=" btn btn-warning m-2">Update</button></td>';
        html +="</tr>";
    })
   document.querySelector("#crudtable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){

    if(validateForm() == true){
        var name = document.getElementById("name").value;
        var department = document.getElementById("department").value;
        var year = document.getElementById("year").value;
        var address = document.getElementById("address").value;

        var stdList;
        if(localStorage.getItem("stdList") == null){
        stdList = [];}
        else{
        stdList = JSON.parse(localStorage.getItem("stdList"));
        }

        stdList.push({
            name : name,
            department : department,
            year : year,
            address : address,
        });
        localStorage.setItem("stdList", JSON.stringify(stdList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("department").value = "";
        document.getElementById("year").value = "";
        document.getElementById("address").value = "";
    }

}

function deleteData(index){
    var stdList;
    if(localStorage.getItem("stdList") == null){
        stdList = [];
    }
    else{
        stdList = JSON.parse(localStorage.getItem("stdList"));
    }

    stdList.splice(index, 1);
    localStorage.setItem("stdList",JSON.stringify(stdList));
    showData();

}

function updateData(index){
    document.getElementById("submit").style.display = "none";
    document.getElementById("submit").style.display = "block";

    var stdList;
    if(localStorage.getItem("stdList") == null){
        stdList = [];
    }
    else{
        stdList = JSON.parse(localStorage.getItem("stdList"));
    }

    document.getElementById("name").value = stdList[index].name;
    document.getElementById("department").value = stdList[index].department;
    document.getElementById("year").value = stdList[index].year;
    document.getElementById("address").value = stdList[index].address;
    

    document.querySelector("#update").onclick = function(){
        if(validateForm() == true){
            stdList[index].name = document.getElementById("name").value;
            stdList[index].department = document.getElementById("department").value;
            stdList[index].year = document.getElementById("year").value;
            stdList[index].address = document.getElementById("address").value;

            localStorage.setItem("stdList", JSON.stringify(stdList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("department").value = "";
            document.getElementById("year").value = "";
            document.getElementById("address").value = "";

            document.getElementById("submit").style.display = "none";
            document.getElementById("submit").style.display = "block";
        }
    }

}