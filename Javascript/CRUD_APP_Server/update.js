function editUser(i) {
  console.log(data[i]);
  index = data[i].id;
  for (a in user) {
    if (a !== "gender" && a !== "subjects") {
      document.getElementById(a).value = data[i][a];
    } else if (a == "gender") {
      allRadioBtns.forEach(element => {
        if (element.value == data[i][a]) {
          element.checked = true;
        }
      });
    } else if (a == "subjects") {
      allSubjects.forEach(element => {
        element.checked = false;
        data[i][a].forEach(val => {
          if (element.value == val) {
            element.checked = true;
          }
        });
      });
    }
  }
}

function updateUser() {
  user = captureUser();
  user.id = index;
  postDataToServer(user, "PUT");
}

function deleteUser(i) {
  postDataToServer(data[i], "DELETE");
}
