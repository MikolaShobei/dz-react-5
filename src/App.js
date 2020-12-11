import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UsersList from "./components/all-users/all-users-list/usersList";
import './App.css'
import PostsList from "./components/all-posts/all-posts-list/postsList";
import CommentsList from "./components/all-coments/all-comments-list/commentsList";
class App extends Component {
    render() {
        return (
            <Router>
                    <div>
                        <div>
                            <Link to={'/users'}>users</Link>
                        </div>
                        <div>
                            <Link to={'/posts'}>posts</Link>
                        </div>
                        <div>
                            <Link to={'/comments'}>comments</Link>
                        </div>
                    <div className={'list'}>
                        <Switch>
                            <Route path={'/users'} render={() => <UsersList/>}/>
                        </Switch>
                        <Switch>
                            <Route path={'/posts'} render={() => <PostsList/>}/>
                        </Switch>
                        <Switch>
                            <Route path={'/comments'} render={() => <CommentsList/>}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App