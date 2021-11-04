const UsersCell = (props) => {
  return props.header ? <th>{props.value}</th> : <td>{props.value}</td>;
};

export default UsersCell;
