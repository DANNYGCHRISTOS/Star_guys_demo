import React, {Component} from 'react'

import './starCard.css'

class StarCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <div className='starCard' onClick={() => this.props.selectHero(this.props.index)}>
                <h4>{this.props.starGuy.name}</h4>
            </div>
        )
    }
}

export default StarCard