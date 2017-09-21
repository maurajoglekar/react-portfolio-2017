import PropTypes from 'prop-types'
import React from 'react';
import './stylesheets/AddColorForm.css'

const AddColorForm = ({onNewColor=f=>f}) => {
    //Refs can also be used in stateless functional components. These components
    // do not have this, so it’s not possible to use this.refs. Instead of using
    // string attributes, we will set the refs using a function.
    let _title, _color

    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm

