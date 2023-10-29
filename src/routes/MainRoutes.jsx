import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../layout/layout.jsx";
import Mainpages from "../pages/Mainpages.jsx";
import {INITIAL_PATH} from "../utils/constans/constans.js";

function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path={INITIAL_PATH.main_page} element={<Layout/>}>
                    <Route index element={<Mainpages/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default MainRoutes;