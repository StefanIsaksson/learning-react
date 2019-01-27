import React, { useState } from 'react'

const AddRockForm = props => {
    const initialFormState = { id: null, name: '', visualDescription: '' }
    const [rock, setRock] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setRock({ ...rock, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!rock.name || !rock.visualDescription) return

                props.addRock(rock)
                setRock(initialFormState)
            }}
        >
            <h4>Add rock</h4>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter rock name"
                    value={rock.name}
                    onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label for="visualDescription">Visual Description</label>
                <textarea type="text"
                    id="visualDescription"
                    name="visualDescription"
                    className="form-control"
                    placeholder="Enter a visual description of the rock"
                    value={rock.visualDescription}
                    onChange={handleInputChange} />
            </div>
            <button className="btn btn-primary">Add new rock</button>
        </form>
    )
}

export default AddRockForm