import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
      <header>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/new">New contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </header>
    );
}