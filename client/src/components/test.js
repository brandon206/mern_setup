import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount () {
        const sendToServer = {
            email: 'jimbo@gmail.com',
            password: 'jimborulez'
        };

        const signInResponse = await axios.post ('/api/sign-in', sendToServer);

        console.log("sign in response: ",signInResponse);


        // const resp = await axios.get('/api/test');
        // console.log('Server response: ', resp);

        // const user = await axios.get("/api/user");
        // console.log("User Response: ", user);
    }
    
    
    render () {
        return (
            <h1>New Text</h1>
        );
    }
}

export default Test;