import React, { memo, useEffect, useState } from 'react'
import ListItem from './ListItem';

function List() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setList(json))
    }, [])

    return (
        <>

            <p>
                React.memo is a higher order component.

                If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

                React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.
            </p>

            <hr />
            <input
                placeholder="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <ul>
                {
                    list.map(item => <ListItem key={item.id} item={item} />)
                }
            </ul>

        </>
    )
}
export default memo(List)