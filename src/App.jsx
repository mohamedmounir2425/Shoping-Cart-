import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Create from "./components/Create/Create";
import Test from "TestStudy/Test";
import Home from "components/Home/Home";
import NotFound from "components/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route index element={<Test />} /> */}
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);



function App() {

  return (
    <>
     
       
        <RouterProvider router={router} />
        
      
    </>
  );
}

export default App;
