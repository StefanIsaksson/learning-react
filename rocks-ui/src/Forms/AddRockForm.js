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
            <label>Name</label>
            <input type="text" name="name" value={rock.name} onChange={handleInputChange} />
            <label>Visaul Description</label>
            <input type="text" name="visualDescription" value={rock.visualDescription} onChange={handleInputChange} />
            <button>Add new rock</button>
        </form>
    )
}

export default AddRockForm