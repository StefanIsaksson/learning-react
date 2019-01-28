import React from 'react'
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";


const RockTable = props => (
  <div>

    


    {props.editing &&
      <Redirect to='/edit'/>
    }

    <div className="row">
      <div className="col-md-12">
        <h1>List of rocks</h1>
        <Link to="/add"><button className="btn btn-primary">Add new rock</button></Link>
      </div>
    </div>
    <div className="row">
    <br/>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.rocks.length > 0
          ? (props.rocks.map(rock => (
            <tr key={rock.id}>
              <td>{rock.name}</td>
              <td>{rock.location}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    props.editRock(rock)
                  }}
                >
                  Edit
              </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => props.deleteRock(rock.id)}
                >
                  Delete
              </button>
              </td>
            </tr>
          ))
          ) : (
            <tr>
              <td colSpan={3}>No rocks</td>
            </tr>
          )}
      </tbody>
    </table>
  </div>
)

export default RockTable