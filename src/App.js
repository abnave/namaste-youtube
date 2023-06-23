import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import { VideoProvider } from "./utils/VideoContext";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body />,
  children : [
    {
      path: "/",
      element : <MainContainer />
    },
    {
      path: "watch",
      element : <Watch />
    }
  ]
}])

function App() {
  return (
    <Provider store = {store}>
      <VideoProvider>
      <div>
        <Header />
        <RouterProvider router={appRouter} >
        <Body />
        </RouterProvider>   
      </div>
      </VideoProvider>
    </Provider>
  );
}

export default App;
