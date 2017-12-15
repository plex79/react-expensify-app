import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        this is from my dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        this is from my add expense
    </div>
);

const EditExpensePage = () => (
    <div>
        this is from my edit
    </div>
);

const HelpPage = () => (
    <div>
        this is from my help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Header text</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;