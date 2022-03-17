import React from 'react';
import useUserContext from '../hooks/user-hook';
// import {UserContext,TokenContext} from '../App';

export default function CustomContextShareHook() {
    // const user = useContext(UserContext);
    // const token = useContext(TokenContext);
    let [user, token] = useUserContext()
    console.log(user, token);
    return (
        <div>
            <h2>CustomContextShareHook</h2>
        </div>
    )
}
