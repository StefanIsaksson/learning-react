import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RockTable from './Tables/RockTable'
import AddRockForm from './Forms/AddRockForm'
import EditRockForm from './Forms/EditRockForm'

const App = () => {
  const rocksData = []

  const updateRockList = () => {
    axios.get('/api/v1/rocks/').then(
      response => { 
        setRocks(response.data) ;
      }
    )
  }

  useEffect(
    () => { updateRockList(); }, []
  );

  const initialFormState = { id: null, name: '', visualDescription: '' }

  const [rocks, setRocks] = useState(rocksData)

  const [editing, setEditing] = useState(false)
  const [currentRock, setCurrentRock] = useState(initialFormState)


  const addRock = rock => {
    axios.post('/api/v1/rocks/', rock).then(
      () => {
        updateRockList();
      }
    );
  }

  const deleteRock = id => {
    setEditing(false)

    axios.delete(`/api/v1/rocks/${id}`).then(
      () => {
        updateRockList();
      }
    );
  }

  const updateRock = (id, updatedRock) => {
    setEditing(false)

    axios.put(`/api/v1/rocks/${id}`, updatedRock).then(
      () => {
        updateRockList();
      }
    );
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