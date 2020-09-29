import React, { memo } from 'react'

function ListItem({ item }) {

    return (
        <li><strong>{item.title}</strong> <i>{item.body}</i></li>
    )
}

export default memo(ListItem)
