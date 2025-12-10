import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter.tsx";

function App() {
    return (
        <>
            <RouterProvider router={router()} />
        </>
    );
}

export default App;
