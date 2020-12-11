import React, {Component} from 'react';
import UsersService from "../../../services/usersService";
import User from "../user-write/user";
import {Route, Switch, withRouter} from "react-router-dom";
import FullInfo from "../full-chose-one-info/fullInfo";

class UsersList extends Component {
    UsersService = new UsersService();

    state = {users : []}
    async componentDidMount() {
        let users = await this.UsersService.users()
        this.setState({users})
    }

    render() {

        let {users} = this.state
        let {match:{url}} = this.props

        return (
            <div>
                {
                    users.map(user => <User item={user} key={user.id}/>)
                }
                <div className={'all-chosen-one-info'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            const {match:{params:{id}}} = props
                            return <FullInfo userId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter (UsersList);