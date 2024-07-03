import React from 'react';

function List() {
    const list = ["arvind","darun","bharath","ashwanth"];
    const listItems = list.map((l) => (
        <li key={l}>{l}</li>
    ));
    return (
        <>
        <h1>List</h1>
            <ol>{listItems}</ol>
            <hr />
        </>
    );
}

export default List;
