import React from "react";

export const UserDetails = ({ allUsers, deleteUser, isDelete }) => {
  return (
    <div>
      {allUsers.map((user, i) => (
        <div className="userInfo" key={i}>
          <p>User Id : {user.id}</p>
          <p>User Email :{user.email}</p>
          <p>User UserName: {user.username}</p>
          <p>User Password : {user.password}</p>
          <br />
          <br />
          {isDelete && (
            <button
              onClick={() => {
                deleteUser(user);
              }}
            >
              Delete User
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
