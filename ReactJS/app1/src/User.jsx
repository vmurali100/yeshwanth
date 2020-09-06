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
    this.handleClear();
  };

  handleClear = () => {
    let user = { ...this.state.user };
    for (let a in user) {
      user[a] = "";
    }
    this.setState({ user });
  };
  render() {
    let { user, users } = this.state;
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
          <button type="button" onClick={this.handleSubmit}>
            Add User
          </button>
        </form>

        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
