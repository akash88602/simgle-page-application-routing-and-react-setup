import { NavLink } from "react-router-dom";

const Users = ({ users }) => {
  const { id,name, phone } = users; // সঠিকভাবে destructure
  return (
    <div className="border-2 p-3">
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p><br />
      <NavLink to={`/users/${id}`} className="m-10">show Deatils</NavLink>
      <NavLink to=''>click me</NavLink>
      
    </div>
  );
};

export default Users;
