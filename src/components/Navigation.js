import "./Navigation.sass";
const { NavLink } = require("react-router-dom");

const navList = [
  { name: "start", path: "/", exact: true },
  { name: "attractions", path: "/attractions" },
  { name: "contact", path: "/contact" },
];

const Navigation = () => {
  const menu = navList.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
