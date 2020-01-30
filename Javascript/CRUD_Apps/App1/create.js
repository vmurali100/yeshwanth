var users = JSON.parse(sessionStorage.getItem("users"));
if (users == null) {
  users = [];
}
person = {
  fname: "",
  lname: "",
  email: "",
  gender: "",
  subjects: []
};
function addUser() {
  person = captureValues();
  users.push(person);
  displayAllUsers(users);
  sessionStorage.setItem("users", JSON.stringify(users));
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

function clearForm() {
  for (a in person) {
    if (a !== "gender" && a !== "subjects") {
      document.getElementById(a).value = "";
      person[a] = "";
    } else if (a == "gender") {
      allRadioBtns.forEach(function(element) {
        element.checked = false;
        person[a] = "";
      });
    } else if (a == "subjects") {
      allCheckBoxes.forEach(element => {
        element.checked = false;
      });
    }
  }
  validateForm();
}

function captureValues() {
  //Capturing all values from HTML in DOM method
  person.fname = document.getElementById("fname").value;
  person.lname = document.getElementById("lname").value;
  person.email = document.getElementById("email").value;

  //Capturing all values from HTML in DOM method in for loop

  //   for (a in person) {
  //     person[a] = document.getElementById(a).value;
  //   }
  allRadioBtns = document.getElementsByName("gender");
  allRadioBtns.forEach(function(element) {
    if (element.checked) {
      person.gender = element.value;
    }
  });

  allCheckBoxes = document.getElementsByName("subject");
  allCheckBoxes.forEach(function(element) {
    if (element.checked) {
      person.subjects.push(element.value);
    }
  });
  return person;
}
function searchUser() {
  var seearchText = document.getElementById("search").value;
  newUsers = users.filter(function(user) {
    return user.fname.indexOf(seearchText) > -1;
  });
  console.log(newUsers);
  displayAllUsers(newUsers);
}

displayAllUsers(users);

function validateForm() {
  var check = null;
  person = captureValues();
  for (a in person) {
    console.log(person[a]);
    if (a != "subjects") {
      if (person[a] != "") {
        check = true;
      }
    }
  }
  if (check == null) {
    document.getElementById("myBtn").setAttribute("disabled", true);
  } else {
    document.getElementById("myBtn").removeAttribute("disabled");
  }
}
validateForm();
