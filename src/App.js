import React from 'react';
import store from './store';
import LoginCard from './components/LoginCard';
import ProfileCard from './components/ProfileCard';
import Header from './components/Header';
import ChangeInfoCard from './components/ChangeInfoCard';
import GlobalStyles from './GlobalStyles';
import { useSelector } from 'react-redux';
const App = () => {
    const isEditing = useSelector((state) => state.profile.editing);

    return (
        <>
            <GlobalStyles />
            <Header />
            {/* <LoginCard /> */}
            {!isEditing && <ProfileCard />}
            {isEditing && <ChangeInfoCard />}
        </>
    );
};

export default App;
