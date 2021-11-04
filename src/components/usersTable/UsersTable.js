import UsersTableHeader from "./usersTableHeader/UsersTableHeader";

const UsersTable = (props) => {
  const {users, headers} = props;

  return (
    <table>
      <UsersTableHeader headers={headers} />
    </table>
  );
};

export default UsersTable;
