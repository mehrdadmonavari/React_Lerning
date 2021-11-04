import { useState } from "react";

const Input = (props) => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const changeFirstName = (e) => {
     setUser({...user, firstName: e.target.value})
  };

  const changeLastName = (e) => {
     setUser({...user, lastName: e.target.value})
  };

  return (
    <div>
      <input type="text" value={user.firstName} onChange={changeFirstName}/>
      <input type="text" value={user.lastName} onChange={changeLastName} />
      <div>first name : {user.firstName}</div>
      <div>last name : {user.lastName}</div>
    </div>
  );
};

export default Input;
