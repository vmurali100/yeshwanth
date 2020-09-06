import React, { Component } from "react";
import "./myStyles.css";
import { UserDetails } from "./UserDetails";

export default class Sample4Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 130300,
          email: "YSpeth@sollicitudin.ly",
          username: "FShute",
          password: "Go9Vp",
        },
        {
          id: 130301,
          email: "BBelkin@convallis.gov",
          username: "AMckee",
          password: "NE4wP",
        },
        {
          id: 130302,
          email: "KWooten@tincidunt.org",
          username: "DGleason",
          password: "Vu8YE",
        },
        {
          id: 130303,
          email: "VFruscione@porttitor.ly",
          username: "KKnoepfel",
          password: "Miu2I",
        },
        {
          id: 130304,
          email: "AFaidley@porttitor.com",
          username: "VCollier",
          password: "gFXe5",
        },
      ],
      isDelete: true,
    };
  }
  deleteUser = ({ id }) => {
    let users = this.state.users.filter((user) => {
      return user.id !== id;
    });
    this.setState({ users });
  };
  render() {
    let { users } = this.state;

    return (
      <div>
        <h2>Hello From Sample 4 Component</h2>
        <UserDetails
          allUsers={users}
          deleteUser={this.deleteUser}
          isDelete={this.state.isDelete}
        />
      </div>
    );
  }
}
