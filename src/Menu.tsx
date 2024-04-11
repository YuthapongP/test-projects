import React, { useCallback, useState } from "react";
import { routeMenus } from "./RoutMenu";
import "./Menu.css";

type menuProps = {
  isOpen: boolean | undefined;
};

export interface ISubMenu {
  id: string;
  name: string;
  path: string;
  preInfo?: string;
}

export interface IMenu {
  id: string;
  path?: string;
  name: string;
  subMenus?: ISubMenu[];
  isActive?: boolean;
}

export interface IPathCategory {
  id: string;
  path?: string;
  name: string;
  menus?: IMenu[];
  isActive?: boolean;
}

export interface IRouterPath {
  id: string;
  path?: string;
  name?: string;
  menus?: IPathCategory[];
  isActive?: boolean;
}

const Menu = () => {
  const [routeMenu, setRouteMenu] = useState(routeMenus);
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideBarMenu(): void {
    if (isOpen) {
      closeAllMenuBar();
    }
    setIsOpen(!isOpen);
  }

  const closeAllMenuBar = () => {
    setRouteMenu(routeMenu.map(closeExternalMenu));

    function closeExternalMenu({ menuRoutes }: IMenu): unknown {
      return {
        ...menuRoutes,
        isActive: false,
        menuRoutes: menuRoutes.subMenu?.map(closeSubMenu),
      };
    }

    function closeSubMenu({ subMenus }: IPathCategory): unknown {
      if (subMenus?.menu) {
        return {
          ...subMenus,
          isActive: false,
          subMenus: subMenus.menu?.slice(),
        };
      } else {
        return { ...subMenus, isActive: false, subMenus: [] };
      }
    }
  };

  const handleOpenExternalMenu = useCallback(
    (menuIndex: unknown) => {
      //   const mutatedMenuList = routeMenu.map((item) => {
      //     if (menuIndex === item.id) {
      //       return { ...item, isActive: !item.isActive };
      //     }
      //     return item;
      //   });
      const mutatedMenuList = routeMenu.map(toggleMenu);
      setRouteMenu(mutatedMenuList);

      function toggleMenu(menu, idx) {
        return menuIndex === idx ? { ...menu, isActive: !menu.isActive } : menu;
      }
      //   return menuIndex === item.id?
    },
    [routeMenu, setRouteMenu]
  );

  const handleOpenSubMenu = (menuIndex) => {
    setRouteMenu(routeMenu.map(toggleMenu));

    function toggleMenu(externalMenu, externalMenuIndex) {
      return menuIndex === externalMenuIndex
        ? { ...externalMenu, isActive: !externalMenu.isActive }
        : externalMenu;
    }

    function handleSetRouteMenu(subMenu, subMenuIndex) {
      return menuIndex === subMenuIndex
        ? { ...subMenu, subMenu: subMenu }
        : subMenu;
    }
  };

  console.log(routeMenu);

  return (
    <>
      <div>
        {routeMenu.map((menu) => (
          <ul key={menu.id} onClick={() => handleOpenExternalMenu(menu.id)}>
            {menu.name}
            {/* Assuming 'menubar' should be 'menu' */}
            {menu.menus && menu.menus.map((submenu) => <li>{submenu.name}</li>)}
          </ul>
        ))}
      </div>
    </>
  );
};
