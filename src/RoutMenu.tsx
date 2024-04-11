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

export const routeMenus: IRouterPath[] = [
  {
    id: "a",
    name: "Menu1",
    isActive: false,
    menus: [
      {
        id: "a11",
        isActive: false,
        name: "hello11",
      },
      {
        id: "a12",
        isActive: false,
        name: "hello12",
      },
      {
        id: "a13",
        isActive: false,
        name: "hello13",
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
      },
      {
        id: "a22",
        isActive: false,
        name: "hello22",
      },
      {
        id: "a23",
        isActive: false,
        name: "hello23",
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
      },
      {
        id: "a32",
        isActive: false,
        name: "hello32",
      },
      {
        id: "a33",
        isActive: false,
        name: "hello33",
      },
    ],
  },
];
