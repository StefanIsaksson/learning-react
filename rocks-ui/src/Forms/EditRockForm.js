import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
	const [rock, setRock] = useState(props.currentRock)

	useEffect(
		() => {
			setRock(props.currentRock)
		},
		[props]
	)

	const handleInputChange = event => {
		const { name, value } = event.target

		setRock({ ...rock, [name]: value })
	}

	return (
		<div class="row">
			<div class="col-md-12">
				<form
					onSubmit={event => {
						event.preventDefault()

						props.updateRock(rock.id, rock)
					}}
				>
					<h4>Edit rock</h4>
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
					<button className="btn btn-primary">Update rock</button>
					<button className="btn btn-warning" onClick={() => props.setEditing(false)} >
						Cancel
			</button>

				</form>
			</div>
		</div>
	)
}

export default EditUserForm