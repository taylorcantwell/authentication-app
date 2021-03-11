import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ChangeInfoCard from './components/ChangeInfoCard';
import Header from './components/Header';
import LoginCard from './components/LoginCard';
import ProfileCard from './components/ProfileCard';
import GlobalStyles from './GlobalStyles';

const App = () => {
    const isAuthorized = useSelector((state) => state.authorization.authorized);
    return (
        <>
            <GlobalStyles />
            <Header />
            <Switch>
                <Route
                    path="/"
                    exact
                    component={isAuthorized ? ProfileCard : LoginCard}
                />
                {!isAuthorized && <Redirect to="/" />}
                <Route path="/profile" component={ProfileCard} />
                <Route path="/profile-edit" exact component={ChangeInfoCard} />
                <Route>Url doesn't exist</Route>
            </Switch>
        </>
    );
};

export default App;
