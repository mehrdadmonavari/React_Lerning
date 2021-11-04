import UsersCell from "../usersCell/UsersCell";

const UsersRow = (props) => {
  const { values, header } = props;

  return (
    <tr>
      {Object.values(values).map((value) => (
        <UsersCell value={value} header={header} />
      ))}
    </tr>
  );
};

export default UsersRow;
