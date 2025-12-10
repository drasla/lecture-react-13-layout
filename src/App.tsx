import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/themes.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyle />
            <RouterProvider router={router()} />
        </ThemeProvider>
    );
}

export default App;
