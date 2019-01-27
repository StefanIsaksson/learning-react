import React from 'react'

const RockTable = props => (
  <div>
    <div className="row">
      <br/>
    </div>
    <h4>List of rocks</h4>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Visual Description</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.rocks.length > 0
          ? (props.rocks.map(rock => (
            <tr key={rock.id}>
              <td>{rock.name}</td>
              <td>{rock.visualDescription}</td>
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