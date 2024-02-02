import React, { useState } from 'react'
import Topbar from "./page/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Sidebar from "./page/global/Sidebar";
import NotFound from "./page/NotFound"


const MainLayout = () => {
    const [direction, setDirection] = useState("ltr");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleDirectionSet = () => {
        if (direction === "rtl") {
            setDirection("ltr")
        }
        else {
            setDirection("rtl")
        }
    }
    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className="app" style={{ display: 'flex', direction: direction }} >
            <Sidebar handleDirectionSet={handleDirectionSet} direction={direction} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className="content" >
                <Topbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} handleCollapse={handleCollapse} />
                <Routes>
                    <Route path="/*" exact element={<NotFound />} />
                    <Route path="/test" exact element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    )
}

export default MainLayout