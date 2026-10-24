import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import ("../pages/Home"));
const About = lazy(() => import ("../pages/About"));
const Contact = lazy(() => import ("../pages/Contact"));
const User = lazy(() => import ("../pages/User"));
const NotFound = lazy(() => import ("../pages/NotFound"));


function Paths() {
    return(
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/user/:id" element={<User />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
    );
}

export default Paths;