var users = [];
function addUser() {
  var person = {
    fname: "",
    lname: "",
    email: "",
    gender: ""
  };

  //Capturing all values from HTML in DOM method
  person.fname = document.getElementById("fname").value;
  person.lname = document.getElementById("lname").value;
  person.email = document.getElementById("email").value;

  //Capturing all values from HTML in DOM method in for loop

  //   for (a in person) {
  //     person[a] = document.getElementById(a).value;
  //   }
  var allRadioBtns = document.getElementsByName("gender");
  allRadioBtns.forEach(function(element) {
    if (element.checked) {
      person.gender = element.value;
    }
  });
  users.push(person);
  displayAllUsers(users);
  clearForm(person);
}

//Display all users captured from HTML

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
    editBtn.setAttribute("class", "btn btn-warning");
    editTd.appendChild(editBtn);
    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.innerHTML = "Delete";
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
}

function clearForm(person) {
  for (a in person) {
    if (a !== "gender") {
      document.getElementById(a).value = "";
    } else if (a == "gender") {
      var allRadio = document.getElementsByName("gender");
      allRadio.forEach(function(element) {
        element.checked = false;
      });
    }
  }
}

function searchUser() {
  console.log("searchUser called");
  var seearchText = document.getElementById("search").value;
  newUsers = users.filter(function(user) {
    return user.fname.indexOf(seearchText) > -1;
  });
  console.log(newUsers);
  displayAllUsers(newUsers);
}
