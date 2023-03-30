import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import {Header} from './components';
import {Home, Cart} from './pages';
import { setPizzas } from './redux/action/pizzas';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        // TODO: Пернести в Redux и подключить redux-thunk
        // TODO: Следить за фильтрацией и сортировкой, подставлять параметры в URL из Redux
        // TODO: Сделать Lazy
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data));
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/cart" element={<Cart/>} exact />
                </Routes>
            </div>
        </div>
    )
}

export default App;