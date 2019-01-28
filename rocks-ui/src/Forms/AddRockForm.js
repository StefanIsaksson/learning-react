import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'


const AddRockForm = props => {
    const initialFormState = { id: null, name: '', visualDescription: '' }
    const [rock, setRock] = useState(initialFormState)
    const [adding, setAdding] = useState(true)

    const handleInputChange = event => {
        const { name, value } = event.target

        setRock({ ...rock, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!rock.name || !rock.visualDescription) return

                props.addRock(rock);
                setRock(initialFormState);
                setAdding(false);
            }}
        >
            {!adding &&
                <Redirect to='/' />
            }

            <h1>Add rock</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter rock name"
                    value={rock.name}
                    onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="visualDescription">Visual Description</label>
                <textarea type="text"
                    id="visualDescription"
                    name="visualDescription"
                    className="form-control"
                    placeholder="Enter a visual description of the rock"
                    value={rock.visualDescription}
                    onChange={handleInputChange} />
            </div>
            <button className="btn btn-primary">Add new rock</button>
            <Link to="/"><button className="btn btn-warning">Cancel</button></Link>
        </form>
    )
}

export default AddRockForm