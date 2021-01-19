import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.nom}</h1>
                <p>{this.props.texte}</p>
                <span>{this.props.auteur}</span>
            </div>
        )
    }
}

export default Article
