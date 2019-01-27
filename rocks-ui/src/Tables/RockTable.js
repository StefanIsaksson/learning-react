import React from 'react'

const RockTable = props => (
  <table>
    <thead>
      <tr>
        <th>Rock Name</th>
        <th>Visual Description</th>
        <th>Location</th>
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
                className="button muted-button"
                onClick={() => {
                  props.editRock(rock)
                }}
              >
              Edit
              </button>
              <button
                onClick={() => props.deleteRock(rock.id)}
                className="button muted-button"
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
)

export default RockTable