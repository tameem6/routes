import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';  

class Users extends React.Component {
    state = {
        users : []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                this.setState({
                    users : res.data
                })
                console.log(this.state.users);
            });
    }
    render() {
        const users = this.state.users;
        const userList= users.length ? (
            users.map(user => {
                return (
                    <div className="card" key={user.id}>
                        <div className="card-body">
                            <Link to={'/'+user.id}>
                                <h4 className="class-title">{user.name}</h4>
                            </Link>
                            <p className="card-text">{user.username}</p>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="container text-center">
                No users yet
            </div>
        );
        return (
            <div className="container">
                <h1 className="jumbotron text-center">Users</h1>
                {userList}
            </div>
        );
    }
}

export default Users;