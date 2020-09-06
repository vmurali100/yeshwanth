import React, { Component } from "react";
import { UserDetails } from "./UserDetails";

export default class Sample5Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: [
        {
          id: 130315,
          email: "LGipple@aliquam.net",
          username: "TPuckett",
          password: "GKvXW",
        },
        {
          id: 130316,
          email: "LFrutos@porta.org",
          username: "SProia",
          password: "edwBQ",
        },
        {
          id: 130317,
          email: "MCox@odio.io",
          username: "NHughesdkaiya",
          password: "zSujx",
        },
        {
          id: 130318,
          email: "MVyater@ipsum.ly",
          username: "AKnowlton",
          password: "7j509",
        },
        {
          id: 130319,
          email: "MWassum@tincidunt.net",
          username: "TBadertscher",
          password: "AiPHc",
        },
      ],
      isDelete: false,
    };
  }

  render() {
    let { allUsers } = this.state;

    return (
      <div>
        <h2>Data From Sample 5 Component</h2>
        <UserDetails allUsers={allUsers} isDelete={this.state.isDelete} />
      </div>
    );
  }
}
