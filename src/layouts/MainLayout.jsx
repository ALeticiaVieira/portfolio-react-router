import { Outlet } from "react-router";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";


function MainLayout() {
    return(
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;