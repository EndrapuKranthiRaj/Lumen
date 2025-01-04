import Navbar from "./navbar";
import Landing_page from "./landing_page";
import About from "./About";
import Lumen1 from "./Lumen1";
import Lumen2 from "./Lumen2";
import Lumen3 from "./Lumen3";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


function App() {
    const router = createBrowserRouter([
        {
            path : '/',
            element : <> <Navbar/><Landing_page/> </>
        },
        {
            path : '/about',
            element :<> <Navbar/> <About/></> 
        },
        {
            path : '/lumen1',    //input page
            element : <> <Navbar/><Lumen1/></>
        },

        {
            path : '/lumen2',
            element : <> <Navbar/><Lumen2/></>
        },
        {
            path : '/lumen3',
            element : <> <Navbar/><Lumen3/></>
        },

    ])
    return(
        <>
        
        <RouterProvider router = {router}/>
        </>
    );
}
export default App
