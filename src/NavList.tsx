import React, { ComponentProps } from "react";
import {
  NavListGroupProps,
  NavList as NavListPrimer,
  SxProp,
} from "@primer/react";

interface MergedNavList extends ComponentProps<typeof NavListPrimer> {
  children: React.ReactNode;
  //   ref?: React.Ref<HTMLElement>;
}

export const NavList: React.FC<MergedNavList> &
  React.RefAttributes<HTMLElement> & {
    Item: React.FC<ComponentProps<typeof NavListPrimer.Item>>;
    SubNav: React.FC<React.ComponentProps<typeof NavListPrimer.SubNav>>;
    LeadingVisual: React.FC<
      React.PropsWithChildren<SxProp & React.HTMLAttributes<HTMLSpanElement>>
    >;
    TrailingVisual: React.FC<
      React.PropsWithChildren<SxProp & React.HTMLAttributes<HTMLSpanElement>>
    >;
    Divider: React.FC<React.PropsWithChildren<SxProp>>;
    Group: React.FC<NavListGroupProps>;
  } = (props) => {
  const { children, ...rest } = props;

  return <NavListPrimer {...rest}>{children}</NavListPrimer>;
};

const Item: React.FC<ComponentProps<typeof NavListPrimer.Item>> = (props) => {
  const { children, ...rest } = props;
  return <NavListPrimer.Item {...rest}>{children}</NavListPrimer.Item>;
};

const SubNav: React.FC<ComponentProps<typeof NavListPrimer.SubNav>> = (
  props
) => {
  const { children, ...rest } = props;

  return <NavListPrimer.SubNav {...rest}>{children}</NavListPrimer.SubNav>;
};
const TrailingVisual: React.FC<
  ComponentProps<typeof NavListPrimer.TrailingVisual>
> = (props) => {
  const { children, ...rest } = props;

  return (
    <NavListPrimer.TrailingVisual {...rest}>
      {children}
    </NavListPrimer.TrailingVisual>
  );
};
const Divider: React.FC<ComponentProps<typeof NavListPrimer.Divider>> = (
  props
) => {
  const { children, ...rest } = props;

  return <NavListPrimer.Divider {...rest}>{children}</NavListPrimer.Divider>;
};
const Group: React.FC<ComponentProps<typeof NavListPrimer.Group>> = (props) => {
  const { children, ...rest } = props;

  return <NavListPrimer.Group {...rest}>{children}</NavListPrimer.Group>;
};

const LeadingVisual: React.FC<
  ComponentProps<typeof NavListPrimer.LeadingVisual>
> = (props) => {
  const { children, ...rest } = props;

  return (
    <NavListPrimer.LeadingVisual {...rest}>
      {children}
    </NavListPrimer.LeadingVisual>
  );
};

NavList.Item = Item;
NavList.SubNav = SubNav;
NavList.LeadingVisual = LeadingVisual;
NavList.TrailingVisual = TrailingVisual;
NavList.Divider = Divider;
NavList.Group = Group;
