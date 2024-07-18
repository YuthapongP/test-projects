import { extendTheme } from "@chakra-ui/react";
import { tabsTheme } from "./variants";

const theme = extendTheme({
  components: {
    Tabs: tabsTheme,
  },
  // ... other customizations (colors, fonts, etc.)
});

export default theme;
