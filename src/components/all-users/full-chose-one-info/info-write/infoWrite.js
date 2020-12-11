import React, {Component} from 'react';

class InfoWrite extends Component {
    render() {
        let {user} = this.props
        let {address:{street,suite,city,zipcode,geo:{lat,lng}},company:{name,catchPhrase,bs}} = user
        return (
            <div>
                <ul>
                    <li>
                        id : {user.id}
                    </li>
                    <li>
                        name : {user.name}
                    </li>
                    <li>
                        username : {user.username}
                    </li>
                    <li>
                        email : {user.email}
                    </li>
                    <li>
                        address :

                        <ul>
                            <li>street : {street}</li>
                            <li>suite : {suite}</li>
                            <li>city : {city}</li>
                            <li>zipcode : {zipcode}</li>
                            <li>geo :
                                <ul>
                                    <li>lat : {lat}</li>
                                    <li>lng : {lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        phone : {user.phone}
                    </li>
                    <li>website : {user.website}</li>
                    <li>company :
                        <ul>

                            <li>name : {name}</li>
                            <li>catchPhrase : {catchPhrase}</li>
                            <li>bs : {bs}</li>
                        </ul>
                    </li>

                </ul>
            </div>
        );
    }
}

export default InfoWrite;