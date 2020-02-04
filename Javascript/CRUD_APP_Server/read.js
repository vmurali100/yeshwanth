function getUsersFromServer() {
  var getData = new XMLHttpRequest();
  getData.onreadystatechange = function() {
    if (getData.readyState == 4 && getData.status == 200) {
      data = JSON.parse(getData.response);
      displayAllUsers(data);
    }
  };
  getData.open("GET", "http://localhost:3000/users");
  getData.send();
}

getUsersFromServer();

function displayAllUsers(data) {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < data.length; i++) {
    var myTr = document.createElement("tr");
    for (a in data[i]) {
      var myTd = document.createElement("td");
      myTd.innerHTML = data[i][a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editBtn.setAttribute("class", "btn btn-warning");
    editTd.appendChild(editBtn);
    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.innerHTML = "Delete";
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
}
