import * as React from "react";
// @ts-ignore
import addons from "@storybook/addons";
import { branch, compose, lifecycle, renderNothing, withState } from "recompose";
import { List } from "immutable";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./types/Theme";

export interface ThemesProviderProps {
    themes: List<Theme>;
    cb?: (theme: Theme) => void;
}

interface ThemesProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

interface ThemesProviderHandler {
}

type BaseComponentProps = ThemesProviderProps & ThemesProviderState & ThemesProviderHandler;

const BaseComponent: React.SFC<BaseComponentProps> = ({ theme, children }) => (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
);

export const ThemesProvider = compose<BaseComponentProps, ThemesProviderProps>(
    withState("theme", "setTheme", null),
    lifecycle<BaseComponentProps, BaseComponentProps>({
        componentDidMount() {
            const { cb, setTheme, themes } = this.props;
            const channel = addons.getChannel();
            channel.on("selectTheme", setTheme);
            if (cb) {
                channel.on("selectTheme", cb);
            }
            channel.emit("setThemes", themes);
        },
        componentWillUnmount() {
            const { cb, setTheme } = this.props;
            const channel = addons.getChannel();
            channel.removeListener("selectTheme", setTheme);
            if (cb) {
                channel.removeListener("selectTheme", cb);
            }
        },
    }),
    branch<BaseComponentProps>(
        (props) => !props.theme,
        renderNothing,
    ),
)(BaseComponent);
