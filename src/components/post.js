import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    state = {
        user : null
    }
    componentDidMount() {
        let id= this.props.match.params.user_id;
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res =>{
                this.setState({
                    user : res.data
                })
                console.log(res.data);
            })
    }
    render() {
        const user = this.state.user ? (
            <div className="user container text-center">
                <h4>{this.state.user.name}</h4>
            </div>
        ) : (
            <div className="text-center">Loading user...</div>
        )
        return ( 
            <div className="container">
                <h4 className="jumbotron text-center">{user}</h4>
            </div>
        )
    }
}

export default Post