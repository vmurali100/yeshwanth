import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
      },
      users: [],
      isEdit: false,
      index: null,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let name = e.target.name;
    let user = { ...this.state.user };
    user[name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    console.log(this.state.user);
    let { users } = this.state;
    users.push(this.state.user);
    this.setState({ users });
    localStorage.setItem("users", JSON.stringify(users));
    this.handleClear();
  };

  handleClear = () => {
    let user = { ...this.state.user };
    for (let a in user) {
      user[a] = "";
    }
    this.setState({ user });
  };

  handleDelete = (i) => {
    let users = this.state.users.filter((user, index) => index !== i);
    this.setState({ users }, () => {
      console.log("User Deleted");
    });
    localStorage.setItem("users", JSON.stringify(users));
  };
  // This method will trigger once Component Loads or Refreshes
  componentDidMount() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      this.setState({ users });
    }
  }
  handleEdit = (user, i) => {
    this.setState({ user, isEdit: true, index: i });
  };
  handleUpdate = () => {
    let { index, user } = this.state;
    let users = [...this.state.users];
    users[index] = user;
    this.setState({ users });
    localStorage.setItem("users", JSON.stringify(users));
    this.handleClear();
  };
  render() {
    let { user, users, isEdit } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            value={user.fname}
            name="fname"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="lname">Last Name :</label>
          <input
            type="text"
            value={user.lname}
            name="lname"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="lname">Email :</label>
          <input
            type="text"
            value={user.email}
            name="email"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          {!isEdit && (
            <button type="button" onClick={this.handleSubmit}>
              Add User
            </button>
          )}
          {isEdit && (
            <button type="button" onClick={this.handleUpdate}>
              Update
            </button>
          )}
        </form>

        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(user, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
