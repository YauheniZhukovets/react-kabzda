import React, {useMemo, useState} from 'react';

export const HelpsForReactMemoExample = () => {

    console.log('HelpsForReactMemoExample')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArrayUsers = useMemo( ()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
       return newArray
    },[users] )

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime() ]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>addUser()}>add user</button>
            {counter}
            <Users  users={newArrayUsers}/>
        </div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)