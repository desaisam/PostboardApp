import React, { useState } from "react";
import SideBarConfig from "./MenuConfig";
import DropdownMenu from "./DropdownMenu";

function SideBarMenu() {
  let initialMenuItems = [];
  SideBarConfig.menus.forEach((menu, index) => {
    let active = menu.active ? menu.active : false;
    initialMenuItems.push({
      active: active,
    });
  });

  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const handleMenuDropDownClick = (e, index) => {
    let newArray = menuItems.map((item, idx) => {
      // check if index equal to current clicked so put inverse value otherwise set to false (collapse other menu)
      index === idx ? (item.active = !item.active) : (item.active = false);
      return item;
    });
    setMenuItems([...newArray]);
  };

  const renderSideBarMenuItem = () => {
    return !SideBarConfig["menus"].length
      ? ""
      : SideBarConfig.menus.map((menu, index) => {
          let liElementList = "";
          if (menu.type === "header") {
            liElementList = (
              <li className="header-menu">
                <span>{menu.title}</span>
              </li>
            );
          } else if (menu.type === "dropdown") {
            liElementList = (
              <DropdownMenu
                menu={menu}
                active={menuItems[index].active}
                key={"sidebar" + index}
                handleClick={(e) => handleMenuDropDownClick(e, index)}
              />
            );
          }
          return liElementList;
        });
  };

  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div>
          <div className="sidebar-item sidebar-brand">
            <a href="/">Postboard</a>
          </div>
          <div className=" sidebar-item sidebar-menu">
            <ul>{renderSideBarMenuItem()}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBarMenu;
