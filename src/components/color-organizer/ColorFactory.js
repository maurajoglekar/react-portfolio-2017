import React, { Component } from 'react';
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import './stylesheets/ColorFactory.css';
import schema from './schema';

class ColorFactory extends Component {
    //We needed to add a constructor to this ES6 component class because we 
    //moved submit to its own function. With ES6 component classes, we must 
    //bind the scope of the component to any methods that need to access 
    //that scope with this.

    constructor(props) {
        super(props)
        let data = JSON.parse(localStorage.getItem('colorsData'));

        if (!data) {
          data = schema;
        }
        this.state = {
            colors: data 
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        const colors = [
            {
                id: v4(),
                title,
                color,
                rating: 0
            },
            ...this.state.colors
        ];
        this.setState({colors});
        localStorage.setItem('colorsData', JSON.stringify(colors));
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating
                }
        );
        this.setState({colors});
        localStorage.setItem('colorsData', JSON.stringify(colors));
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id);
        this.setState({colors});
        localStorage.setItem('colorsData', JSON.stringify(colors));
    }

   render() {
        const { addColor, rateColor, removeColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors}
                           onRate={rateColor}
                           onRemove={removeColor} />
            </div>
        )
    }
}

export default ColorFactory;
