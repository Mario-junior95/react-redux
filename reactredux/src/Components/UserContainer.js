import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/User/UserActions";

const UserContainer = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.loading ? (
        <h2>loading</h2>
      ) : users.error ? (
        <h2>{users.error}</h2>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {users &&
              users.users &&
              users.users.map((user) => {
                return <p key={user.id}>{user.name}</p>;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    fetchUsers: () => {
      dispacth(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
