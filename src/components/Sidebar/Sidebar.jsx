import React, {useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { categories } from "../../utils/Constant";
import { context } from "../../utils/AppContext";

const Sidebar = () => {
  const { setSelectedCategory } = useContext(context);
  const handleClick = (type, name) => {
    if (type === "category" || "home") {
      setSelectedCategory(name);
    } else if (type === "menu") {
      return false;
    }
  };
  return (
    <div className="app__feed-sidebar">
      {categories.map((category, i) => (
        <NavLink to={`/${category.name}`}>
          <div
            key={i}
            className="app__feed-sidebar_icon"
            onClick={()=>handleClick(category.type, category.name)}
          >
            <span>{category.icon}</span>
            <span>{category.type === "home" ? "Home" : category.name}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
