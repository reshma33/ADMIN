import Home from "./pages/Home/home"
import List from "./pages/List/list"
 import Login from "./pages/Login/login";
import New from "./pages/New/New";
import Single from "./pages/Single/single";
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom"
import { productInputs, userInput } from "./formSource";
 import "./Style/dark.scss"
 import { useContext } from "react";
 import { DarkModeContext } from "./context/darkModeContext";




function App() {
   const { darkMode } = useContext(DarkModeContext)
  
    return (
      <div className={darkMode ? "app dark" : "app"}>
<BrowserRouter>
<Routes>
  <Route Path="/">
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="users" >
      <Route index element={<List/>}/>
      <Route path="userId" element={<Single/>}/>
      <Route path="New" element={<New input={userInput } title="Add new student"/>}/>
    </Route>
    <Route path="products" >
      <Route index element={<List/>}/>
      <Route path="productId" element={<Single/>}/>
      <Route path="New" element={<New input={productInputs} title="Add new student"/>}/>
    </Route>
  </Route>
</Routes>
</BrowserRouter>

      </div>
    )

 
}
;

export default App;
