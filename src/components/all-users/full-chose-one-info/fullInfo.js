import React, {Component} from 'react';
import UsersService from "../../../services/usersService";
import InfoWrite from "./info-write/infoWrite";

class FullInfo extends Component {
    UsersService = new UsersService()
    state = {user: null}
    async componentDidMount() {
        let{userId} = this.props
        let user = await this.UsersService.user(userId)
        this.setState({user})
    }


    render() {
        let {user} = this.state
        return (
            <div>
                {user !== null && <InfoWrite user={user}/>}
            </div>
        );
    }
}

export default FullInfo;