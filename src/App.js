import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Head from "./components/Head";
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import DemoUseMemo from "./components/DemoUseMemo";

import "./App.css";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: <DemoUseMemo/>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        {/* 
    Head
    Body
      SideBar
        MenuItems
      MainContainer
        ButtonList
        VideoContainer
          VideoCard
    */}
      </div>
    </Provider>
  );
}

export default App;
