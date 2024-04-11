import React, { ComponentProps, useEffect, useRef, useState } from "react";
import "./Menu.css";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export const routeMenus = [
  {
    id: "a",
    name: "Menu1",
    isActive: false,
    menus: [
      {
        id: "a11",
        isActive: false,
        name: "hello11",
        submenu: [
          { id: "a111", content: "mango", isActive: false },
          { id: "a112", content: "banana", isActive: false },
          { id: "a113", content: "apple", isActive: false },
        ],
      },
      {
        id: "a12",
        isActive: false,
        name: "hello12",
        submenu: [
          { id: "a121", content: "mango", isActive: false },
          { id: "a122", content: "banana", isActive: false },
          { id: "a123", content: "apple", isActive: false },
        ],
      },
      {
        id: "a13",
        isActive: false,
        name: "hello13",
        submenu: [
          { id: "a131", content: "mango", isActive: false },
          { id: "a132", content: "banana", isActive: false },
          { id: "a133", content: "apple", isActive: false },
        ],
      },
    ],
  },
  {
    id: "b",
    name: "Menu2",
    isActive: false,
    menus: [
      {
        id: "a21",
        isActive: false,
        name: "hello21",
        submenu: [
          { id: "a141", content: "mango", isActive: false },
          { id: "a142", content: "banana", isActive: false },
          { id: "a143", content: "apple", isActive: false },
        ],
      },
      {
        id: "a22",
        isActive: false,
        name: "hello22",
        submenu: [
          { id: "a221", content: "mango", isActive: false },
          { id: "a222", content: "banana", isActive: false },
          { id: "a223", content: "apple", isActive: false },
        ],
      },
      {
        id: "a23",
        isActive: false,
        name: "hello23",
        submenu: [
          { id: "a231", content: "mango", isActive: false },
          { id: "a232", content: "banana", isActive: false },
          { id: "a233", content: "apple", isActive: false },
        ],
      },
    ],
  },
  {
    id: "c",
    name: "Menu3",
    isActive: false,
    menus: [
      {
        id: "a31",
        isActive: false,
        name: "hello31",
        submenu: [
          { id: "a311", content: "mango", isActive: false },
          { id: "a312", content: "banana", isActive: false },
          { id: "a313", content: "apple", isActive: false },
        ],
      },
      {
        id: "a32",
        isActive: false,
        name: "hello32",
        submenu: [
          { id: "a321", content: "mango", isActive: false },
          { id: "a322", content: "banana", isActive: false },
          { id: "a323", content: "apple", isActive: false },
        ],
      },
      {
        id: "a33",
        isActive: false,
        name: "hello33",
        submenu: [
          { id: "a331", content: "mango", isActive: false },
          { id: "a332", content: "banana", isActive: false },
          { id: "a333", content: "apple", isActive: false },
        ],
      },
    ],
  },
];

// function getAllKeys(obj) {
//   let keys = [];
//   const extractKeys = (val) => {
//     if (typeof val === "object" && val !== null) {
//       Object.keys(val).forEach((key) => {
//         if (!keys.includes(key)) {
//           keys.push(key);
//         }
//         console.log(val[key], "val[key]");
//         extractKeys(val[key]);
//       });
//     } else if (Array.isArray(val)) {
//       val.forEach((item) => {
//         extractKeys(item);
//       });
//     }
//   };
//   extractKeys(obj);
//   return keys;
// }

// const allKeys = getAllKeys(routeMenus);

// console.log(allKeys);

// function getAllKeysAsObject(obj) {
//   let keys = {}; // Changed to an object

//   const extractKeys = (val) => {
//     if (typeof val === "object" && val !== null) {
//       Object.keys(val).forEach((key) => {
//         // Store keys in an object
//         if (!Object.prototype.hasOwnProperty.call(keys, key)) {
//           keys[key] = []; // Initialize as an array if the key is seen for the first time
//         }
//         keys[key].push(val[key]); // You can push the value or simply a placeholder if you just need the key
//         extractKeys(val[key]);
//       });
//     } else if (Array.isArray(val)) {
//       val.forEach((item) => {
//         extractKeys(item);
//       });
//     }
//   };

//   extractKeys(obj);
//   return keys;
// }

// const allKeys = getAllKeysAsObject(routeMenus);
// console.log(allKeys);

function getkeys(obj) {
  let keys = [];

  const checkKeys = (val) => {
    if (typeof val === "object" && val !== null) {
      Object.keys(val).forEach((eachVal) => {
        if (!keys.includes(eachVal)) {
          keys.push(eachVal);
          console.log(keys, "keys");
        }
        checkKeys(val[eachVal]);
        console.log(val[eachVal], "val[eachVal]");
      });
    } else if (Array.isArray(val)) {
      val.forEach((item) => {
        checkKeys(item);
        console.log(item, "item");
      });
    }
  };
  checkKeys(obj);
  return keys;
}

getkeys(routeMenus);

// type Menu2Type = React.ComponentProps<"div">;

export default function Menu2() {
  const [data, setData] = useState(routeMenus);
  const [toggle, setToggle] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const componentRef = useRef(null);

  const handleChangeMenu = (idx) => {
    const finalData = data.map((each) => {
      if (each.id === idx) {
        return { ...each, isActive: !each.isActive };
      } else if (each.menus) {
        return {
          ...each,
          menus: each.menus.map((submenu) =>
            submenu.id === idx
              ? {
                  ...submenu,
                  subMenu: submenu.submenu.map((eachContent) => {
                    return { ...eachContent };
                  }),
                }
              : submenu
          ),
        };
      }
      return each;
    });
    setData(finalData);
  };

  const handleCollapseSubmenu = (idx) => {
    const updateData = data.map((each) => {
      if (each.menus && each.id === idx) {
        return {
          ...each,
          menus: each.menus.map((submenu) => {
            if (submenu.submenu) {
              return {
                ...submenu,
                submenu: submenu.submenu.map((subSubmenu) => ({
                  ...subSubmenu,
                  isActive: false,
                })),
                isActive: false,
              };
            }
            return submenu;
          }),
          isActive: false,
        };
      }
      return each;
    });
    setData(updateData);
  };

  //   const handleChangeSubMenuItem = (menuId, subMenuId, itemId) => {
  //     const updatedData = data.map((each) => {
  //       if (each.id === menuId && each.menus) {
  //         return {
  //           ...each,
  //           menus: each.menus.map((submenu) =>
  //             submenu.id === subMenuId
  //               ? {
  //                   ...submenu,
  //                   submenu: submenu.submenu.map((subSubmenu) =>
  //                     subSubmenu.id === itemId
  //                       ? {
  //                           ...subSubmenu,
  //                           isActive: !subSubmenu.isActive,
  //                         }
  //                       : subSubmenu
  //                   ),
  //                 }
  //               : submenu
  //           ),
  //         };
  //       }
  //       return each;
  //     });
  //     setData(updatedData);
  //   };

  const handleChangeSubMenuItem = (menuId, subMenuId) => {
    const updatedData = data.map((each) => {
      if (each.id === menuId && each.menus) {
        return {
          ...each,
          menus: each.menus.map((submenu) =>
            submenu.id === subMenuId
              ? {
                  ...submenu,
                  isActive: !submenu.isActive,
                }
              : submenu
          ),
        };
      }
      return each;
    });
    setData(updatedData);
  };

  //   const handleCollapseAllMenu = () => {
  //     const updateData = data.map((each) => {
  //       each.menus
  //         ? {
  //             ...each,
  //             menus: each.menus.map((submenu) => {
  //               submenu.submenu ? { ...submenu, isActive: false } : submenu;
  //             }),
  //             isActive: false,
  //           }
  //         : each;
  //     });
  //     setData(updateData);
  //   };

  const handleCollapseAllMenu = () => {
    const updateData = data.map((each) => {
      if (each.menus) {
        return {
          ...each,
          menus: each.menus.map((submenu) => {
            if (submenu.submenu) {
              return {
                ...submenu,
                submenu: submenu.submenu.map((subSubmenu) => ({
                  ...subSubmenu,
                  isActive: false,
                })),
                isActive: false,
              };
            }
            return submenu;
          }),
          isActive: false,
        };
      }
      return each;
    });
    setData(updateData);
    setToggle(!toggle);
  };

  const handleCollapseSubenu = () => {
    const updateData = data.map((each) => {
      if (each.menus) {
        return {
          ...each,
          menus: each.menus.map((submenu) => {
            if (submenu.submenu) {
              return {
                ...submenu,
                submenu: submenu.submenu.map((subSubmenu) => ({
                  ...subSubmenu,
                  isActive: false,
                })),
              };
            }
            return submenu;
          }),
          isActive: false,
        };
      }
      return each;
    });
    setData(updateData);
    setToggle(!toggle);
  };

  console.log(data);

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && toggle === true) {
      handleCollapseAllMenu();
    }
  };

  const handleClickOutside = (event) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target) &&
      toggle === true
    ) {
      handleCollapseAllMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [data, toggle]);

  return (
    <>
      <HamburgerIcon
        onClick={handleCollapseAllMenu}
        style={{ cursor: "pointer" }}
      ></HamburgerIcon>
      {/* <button> close all </button> */}
      <div ref={componentRef} className={`menu ${toggle ? "show" : "hide"}`}>
        {data.map((item) => (
          <div key={item.id} className="show">
            {/* {t(`${item.name}`).toLowerCase()} */}
            {t(`slots.${item.name.toLowerCase()}`)}

            {/* {item.name} */}
            {item.isActive ? (
              <ChevronUpIcon
                boxSize={7}
                onClick={() => handleCollapseSubmenu(item.id)}
              ></ChevronUpIcon>
            ) : (
              <ChevronDownIcon
                style={{ cursor: "pointer" }}
                boxSize={7}
                onClick={() => {
                  handleChangeMenu(item.id);
                }}
              ></ChevronDownIcon>
            )}
            {item.menus &&
              item.menus.map((subitem) => (
                <div
                  key={subitem.id}
                  className={`subItem ${item.isActive ? "show" : "hide"}`}
                  // onClick={() => handleChangeSubMenu(subitem.id)}
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   handleChangeSubMenuItem(item.id, subitem.id);
                  // }}
                >
                  {subitem.name}
                  {subitem.isActive ? (
                    <ChevronUpIcon
                      style={{ cursor: "pointer" }}
                      boxSize={7}
                      onClick={() =>
                        handleChangeSubMenuItem(item.id, subitem.id)
                      }
                    ></ChevronUpIcon>
                  ) : (
                    <ChevronDownIcon
                      style={{ cursor: "pointer" }}
                      boxSize={7}
                      onClick={() =>
                        handleChangeSubMenuItem(item.id, subitem.id)
                      }
                    ></ChevronDownIcon>
                  )}
                  {subitem.submenu.map((submenuItem) => (
                    <div
                      className={`lastItem ${
                        subitem.isActive ? "show" : "hide"
                      } `}
                    >
                      {submenuItem.content}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

// export default function Menu2() {
//     const [data, setData] = useState(routeMenus);

//     const handleChangeMenu = (idx) => {
//       const finalData = data.map((each) => {
//         if (each.id === idx) {
//           return { ...each, isActive: !each.isActive };
//         } else if (each.menus) {
//           return {
//             ...each,
//             menus: each.menus.map((submenu) =>
//               submenu.id === idx
//                 ? {
//                     ...submenu,
//                     isActive: !submenu.isActive,
//                     submenu: submenu.submenu.map((eachContent) =>
//                       eachContent.id === idx
//                         ? { ...eachContent, isActive: !eachContent.isActive }
//                         : eachContent
//                     ),
//                   }
//                 : submenu
//             ),
//           };
//         }
//         return each;
//       });
//       setData(finalData);
//     };

//     const handleChangeSubMenuItem = (menuId, subMenuId, itemId) => {
//       const updatedData = data.map((each) => {
//         if (each.id === menuId && each.menus) {
//           return {
//             ...each,
//             menus: each.menus.map((submenu) =>
//               submenu.id === subMenuId
//                 ? {
//                     ...submenu,
//                     submenu: submenu.submenu.map((subSubmenu) =>
//                       subSubmenu.id === itemId
//                         ? {
//                             ...subSubmenu,
//                             isActive: !subSubmenu.isActive,
//                           }
//                         : subSubmenu
//                     ),
//                   }
//                 : submenu
//             ),
//           };
//         }
//         return each;
//       });
//       setData(updatedData);
//     };

//     return (
//       <>
//         {data.map((item) => (
//           <ul key={item.id} onClick={() => handleChangeMenu(item.id)}>
//             {item.name}
//             {item.menus &&
//               item.menus.map((subitem) => (
//                 <li
//                   key={subitem.id}
//                   className={subitem.isActive ? "show" : "hide"}
//                 >
//                   ----{subitem.name}
//                   {subitem.submenu.map((submenuItem) => (
//                     <p
//                       className={submenuItem.isActive ? "show" : "hide"}
//                       key={submenuItem.id}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleChangeSubMenuItem(
//                           item.id,
//                           subitem.id,
//                           submenuItem.id
//                         );
//                       }}
//                     >
//                       ---------{submenuItem.content}
//                     </p>
//                   ))}
//                 </li>
//               ))}
//           </ul>
//         ))}
//       </>
//     );
//   }
