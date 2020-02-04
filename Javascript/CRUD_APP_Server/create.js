var user = {
  fname: "",
  lname: "",
  email: "",
  gender: "",
  subjects: []
};
var allRadioBtns = document.getElementsByName("gender");
var allSubjects = document.getElementsByName("subject");

function addUser() {
  user = captureUser();
  postDataToServer(user, "POST");
}

function postDataToServer(user, method) {
  var sendData = new XMLHttpRequest();
  sendData.onreadystatechange = function() {
    if (sendData.readyState == 4 && sendData.status == 201) {
      console.log("User Added Successfully");
    }
  };
  if (method == "POST") {
    sendData.open(method, "http://localhost:3000/users");
    sendData.setRequestHeader("Content-Type", "application/json");
    sendData.send(JSON.stringify(user));
  } else if (method == "PUT") {
    sendData.open(method, "http://localhost:3000/users/" + user.id);
    sendData.setRequestHeader("Content-Type", "application/json");
    sendData.send(JSON.stringify(user));
  } else if (method == "DELETE") {
    sendData.open(method, "http://localhost:3000/users/" + user.id);
    sendData.send();
  }
}

function captureUser() {
  for (a in user) {
    if (a !== "gender" && a !== "subjects") {
      user[a] = document.getElementById(a).value;
    }
    if (a == "gender") {
      allRadioBtns.forEach(element => {
        if (element.checked) {
          user.gender = element.value;
        }
      });
    }
    if (a == "subjects") {
      allSubjects.forEach(element => {
        if (element.checked) {
          user.subjects.push(element.value);
        }
      });
    }
  }
  return user;
}
