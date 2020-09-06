import React, { Component } from "react";
import { CityDetails } from "./CityDetails";

class Sample3Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "Murali",
      lname: "Krishna",
      users: ["Murali", "Yeshwanth", "Ram", "Ravi", "Kiran"],
      newUer: {},
      isVisible: true,
      oneMore: {},
      another: {
        email: "Krishna@gmail.com",
      },
      details: {
        address: {
          cities: ["Bangalore", "Chennai"],
        },
      },
    };
  }

  render() {
    let { email } = this.state.another;
    let { users } = this.state;
    let [name1, second] = this.state.users;
    let { cities } = this.state.details.address;
    console.log(cities);
    return (
      <div>
        <h2>Hello From React Class Component</h2>
        {/* <p>{this.state.another.email}</p> */}
        {email}
        {users.map((user, i) => {
          return <p>{user}</p>;
        })}
        <p>The First Name in Array is - {name1}</p>

        {/* <p>The city Name is - {secondCity}</p> */}
        <CityDetails cityNames={cities} />
      </div>
    );
  }
}

export default Sample3Class;
