import { NavLinks } from "./Nav-Links"


const Header = () => {
  return (
    <>
      <NavLinks href="/">Home</NavLinks>
      <NavLinks href="/carreira">Carreira</NavLinks>
      <NavLinks href="/projetos">Projetos</NavLinks>
      <NavLinks href="/hobbies">Hobbies</NavLinks>
    </>
  );
};

export default Header;