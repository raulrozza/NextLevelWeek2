import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/study" component={TeacherList} />
                <Route exact path="/give-classes" component={TeacherForm} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
