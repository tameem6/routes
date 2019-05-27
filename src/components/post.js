import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    state = {
        user : null,
        post: null
    }
    componentDidMount() {
        let id= this.props.match.params.user_id;
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res =>{
                this.setState({
                    user : res.data
                })
                console.log(this.state.user);
            });
    }
    render() {
        const user = this.state.user ? (
            <div className="user container text-center">
                <h4 className="jumbotron">{this.state.user.name}</h4>
                <p className="text-center">Email : {this.state.user.email}</p>
                <p className="text-center">Username : {this.state.user.username}</p>
                <p className="text-center">Phone No. : {this.state.user.phone}</p>
                <p className="text-center">Website : {this.state.user.website}</p>
                <p className="text-center">Company : {this.state.user.company.name}</p>
            </div>
        ) : (
            <div className="container text-center">Loading user...</div>
        )
        return ( 
            <div className="container">
                {user}
            </div>
        )
    }
}

export default Post