import React from 'react'

export default props => {
    return (
        <section className="contet-header">
            <h1>{props.title} <small>{props.small}</small></h1>
        </section>
    )
}