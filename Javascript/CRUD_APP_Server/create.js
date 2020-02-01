var user = {
  fname: "",
  lname: "",
  email: "",
  gender: "",
  subjects: []
};
function addUser() {
  for (a in user) {
    if (a !== "gender" && a !== "subjects") {
      user[a] = document.getElementById(a).value;
    }
    if (a == "gender") {
      var allRadioBtns = document.getElementsByName("gender");
      allRadioBtns.forEach(element => {
        if (element.checked) {
          user.gender = element.value;
        }
      });
    }
    if (a == "subjects") {
      var allSubjects = document.getElementsByName("subject");
      allSubjects.forEach(element => {
        if (element.checked) {
          user.subjects.push(element.value);
        }
      });
    }
  }
  postDataToServer(user);
}

function postDataToServer(user) {
  var sendData = new XMLHttpRequest();
  sendData.onreadystatechange = function() {
    if (sendData.readyState == 4 && sendData.status == 201) {
      console.log("User Added Successfully");
    }
  };
  sendData.open("POST", "http://localhost:3000/users");
  sendData.setRequestHeader("Content-Type", "application/json");
  sendData.send(JSON.stringify(user));
}
