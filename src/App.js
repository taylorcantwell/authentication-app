import React from 'react';
import { Counter } from './features/counter/Counter';
import LoginCard from './components/LoginCard';
import GlobalStyles from './GlobalStyles';

function App() {
    return (
        <>
            <GlobalStyles />
            <LoginCard />;
        </>
    );
}

export default App;
