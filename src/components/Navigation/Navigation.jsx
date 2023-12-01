import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, Nav, NavigationLink } from './Navigation.styled';
import { MainTitle } from 'components/individualElements/Title';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Header>
      <MainTitle>Phonebook</MainTitle>
      <Nav>
        <NavigationLink to="/contacts">Contacts</NavigationLink>
        <NavigationLink to="/new">New contact</NavigationLink>
      </Nav>
      <UserMenu />
    </Header>
  ) : (
    <Header className="right-position">
      <MainTitle>Phonebook</MainTitle>
      <Nav>
        <NavigationLink to="/login">Login</NavigationLink>
        <NavigationLink to="/register">Register</NavigationLink>
      </Nav>
    </Header>
  );
};
