import React, {Component} from 'react'

import './starCard.css'

class ExtraInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        console.log(this.props.hero, 'hero')
    let { name, 
        height, 
        mass, 
        hair_color, 
        skin_color, 
        eye_color, 
        birth_year, 
        gender } = this.props.hero

        return (
            <div className='detail-card' style={{backgroundColor: eye_color}}>
                <h1 onClick={() => this.props.closeExtra(null)}>X</h1>
                <h2>Name: {name}</h2>
                <h2>Height: {height}</h2>
                <h2>Mass: {mass}</h2>
                <h2>Hair Color: {hair_color}</h2>
                <h2>Skin Color: {skin_color}</h2>
                <h2>EyeColor: {eye_color}</h2>
                <h2>Birth Year: {birth_year}</h2>
                <h2>Gender: {gender}</h2>
            </div>
        )
    }
}

export default ExtraInfo
