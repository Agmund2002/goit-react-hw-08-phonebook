import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { Email, UserMenuBox } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

    return (
      <UserMenuBox>
        <Email>{user.email}</Email>
        <button className="button" type="button" onClick={() => dispatch(logOut())}>Logout</button>
      </UserMenuBox>
    );
}