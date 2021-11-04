import UsersRow from "../usersRow/UsersRow";

const UsersTableHeader = (props) => {
  const values = props.headers;
  
  return (
    <thead>
      <UsersRow values={values} header={true} />
    </thead>
  );
};

export default UsersTableHeader;
