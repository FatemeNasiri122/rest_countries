import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";
import LoadingCircle from "../ui/icons/LoadingCircle";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="max-w-[1440px] m-auto">
                <React.Suspense fallback={<div className="w-full h-screen flex justify-center items-center text-black dark:text-white-color">
                    <LoadingCircle />
                </div>}>
                    <Outlet />
                </React.Suspense>
            </main>
        </>
    )
}

export default Layout