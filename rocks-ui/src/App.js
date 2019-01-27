import React, { useState } from 'react'
import RockTable from './Tables/RockTable'
import AddRockForm from './Forms/AddRockForm'
import EditRockForm from './Forms/EditRockForm'

const App = () => {
  const rocksData = [
    { id: 1, name: 'Sun Stone', visualDescription: 'yellow' },
    { id: 2, name: 'Moon Stone', visualDescription: 'blue' },
    { id: 3, name: 'Fire Stone', visualDescription: 'red' },
  ]

  const initialFormState = { id: null, name: '', visualDescription: '' }

  const [rocks, setRocks] = useState(rocksData)

  const [editing, setEditing] = useState(false)
  const [currentRock, setCurrentRock] = useState(initialFormState)


  const addRock = rock => {
    rock.id = rocks.length + 1
    setRocks([...rocks, rock])
  }

  const deleteRock = id => {
    setEditing(false)
    
    setRocks(rocks.filter(rock => rock.id !== id))
  }

  const updateRock = (id, updatedRock) => {
    setEditing(false)

    setRocks(rocks.map(rock => (rock.id === id ? updatedRock : rock)))
  }

  const editRock = rock => {
    setEditing(true)

    setCurrentRock({ id: rock.id, name: rock.name, visualDescription: rock.visualDescription })
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit rock</h2>
              <EditRockForm
                editing={editing}
                setEditing={setEditing}
                currentRock={currentRock}
                updateRock={updateRock}
              />
            </div>
          ) : (
              <div className="flex-large">
                <h2>Add rock</h2>
                <AddRockForm addRock={addRock} />
              </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View rock</h2>
          <RockTable rocks={rocks} editRock={editRock} deleteRock={deleteRock} />
        </div>
      </div>
    </div>
  )
}

export default App