import React, {useState} from 'react';

export const ReactMemoExample = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime() ]
        setUsers(newUsers)
    }

    return (
        <div>
            <NewMessagesCounter count={counter}/>
            <Users  users={users}/>
            <button onClick={addUser}>add user</button>
            <button onClick={()=>setCounter(counter+1)}>+</button>
        </div>
    )
}


const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log('Counter +1')
    return <div>{props.count}</div>
}
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('User +')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)