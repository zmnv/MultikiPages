import * as React from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Catalog from './pages/Catalog';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import AnimePage from './pages/Anime';
import { Main } from './pages/MainPage';
import { useState } from 'react';
import { PageType } from './types/post.interfase'
const App = () => {

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/anime" element={<Catalog />} />
                    <Route path="/anime/:id" element={<AnimePage />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/main" element={<Main/>}/>
                </Route>
            </Routes>
      </BrowserRouter>
     )
}
 
export default App;

// wow этачо
function useDisclosure(): { isOpen: any; onOpen: any; onClose: any; } {
    throw new Error('Function not implemented.');
}

