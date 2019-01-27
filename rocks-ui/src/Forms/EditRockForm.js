import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
	const [ rock, setRock ] = useState(props.currentRock)

  useEffect(
    () => {
      setRock(props.currentRock)
    },
    [ props ]
  )

	const handleInputChange = event => {
		const { name, value } = event.target

		setRock({ ...rock, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()

				props.updateRock(rock.id, rock)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={rock.name} onChange={handleInputChange} />
			<label>Visual Description</label>
			<input type="text" name="visualDescription" value={rock.visualDescription} onChange={handleInputChange} />
			<button>Update rock</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Cancel
			</button>
		</form>
	)
}

export default EditUserForm