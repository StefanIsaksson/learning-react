import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'

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
	console.log(rock)
	return (

		<div className="row">
			<div className="col-md-12">
				<form
					onSubmit={event => {
						event.preventDefault()
						if(props.editing){
							props.updateRock(rock.id, rock)
						} 
					}}
				>

					{ !props.editing && 
						<Redirect to='/'/>
					}
				
					<h1>Edit rock</h1>
					{ rock.pictureUrl && 
						<img className="picture" src={rock.pictureUrl} alt="" ></img>
					}
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
					<div className="form-group">
						<label htmlFor="rockFormation">Formation</label>
						<textarea type="text"
							id="rockFormation"
							name="rockFormation"
							className="form-control"
							placeholder="Describe how rock is formed"
							value={rock.rockFormation}
							onChange={handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="mineralComposition">Mineral Composition</label>
						<textarea type="text"
							id="mineralComposition"
							name="mineralComposition"
							className="form-control"
							placeholder="Describe the rocks mineral composition"
							value={rock.mineralComposition}
							onChange={handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="location">Location</label>
						<textarea type="text"
							id="location"
							name="location"
							className="form-control"
							placeholder="Describe where rock is commonly found"
							value={rock.location}
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