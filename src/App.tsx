import React, {FC} from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import Schedule from "./screens/Schedule/Schedule";
import AboutUs from "./screens/AboutUs/AboutUs";
import Contacts from "./screens/Contacts/Contacts";
import {Provider} from "react-redux";
import store from "./redux/store";


const App: FC<any> = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route path='/schedule' element={<Schedule/>}/>
                    <Route path='/about_us' element={<AboutUs/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
