import React, {useCallback, useMemo, useState} from 'react';

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'React', 'HTML','CSS'])

    const newArrayBooks = useMemo( ()=>{
        const newArray = books.filter(u => u.toLowerCase().indexOf('s') > -1)
       return newArray
    },[books] )

    const memoizedAddBooks = useMemo(()=> {
        return  () => {
            const newBooks = [...books, 'Angular' + new Date().getTime() ]
            setBooks(newBooks)
        }
    },[books])

    const memoizedAddBooks2 = useCallback(()=> {
            const newBooks = [...books, 'Angular' + new Date().getTime() ]
            setBooks(newBooks)
        },[books])

    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Book  books={newArrayBooks} addBooks={memoizedAddBooks2}/>
        </div>
    )
}

type BooksSecretType = {
    books: Array<string>
    addBooks: ()=>void
}

const BooksSecret = (props:BooksSecretType) => {
    console.log('Books secret')
    return <div>
        <button onClick={()=>props.addBooks()}>add book</button>
        {props.books.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Book = React.memo(BooksSecret)