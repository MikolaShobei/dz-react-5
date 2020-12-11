import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class PostWrite extends Component {
    render() {
        let {item, match : {url}} = this.props
        return (
            <div>
                {item.title} -- <Link to={url + '/' + item.id}>more</Link>
            </div>
        );
    }
}

export default withRouter (PostWrite);