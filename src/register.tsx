import * as React from "react";
// @ts-ignore 
import addons from "@storybook/addons";
import { Themes } from "./Themes";

// @ts-ignore 
addons.register("storybook/themes", (api) => {
    // Also need to set a unique name to the panel.
    addons.addPanel("storybook/themes/panel", {
        title: "Themes",
        // @ts-ignore 
        render: ({ active, key }) => {
            return (<Themes channel={addons.getChannel()} api={api} active={active} key={key} />);
        },
    });
});
