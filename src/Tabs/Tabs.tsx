import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Users from "../Redux2/Users";
import Increment from "../Redux2/Increment";

const toRenderComponents = {
  userComponent: Users,
  counterComponent: Increment,
};

const TabsBar = () => {
  return (
    <Tabs>
      <TabList>
        {Object.keys(toRenderComponents).map((title) => (
          <Tab>{title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {Object.values(toRenderComponents).map((Component: React.FC) => (
          <TabPanel>
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsBar;
