import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RockTable from './Tables/RockTable'
import AddRockForm from './Forms/AddRockForm'
import EditRockForm from './Forms/EditRockForm'
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <Header/>
          {editing ? (
              <EditRockForm
                editing={editing}
                setEditing={setEditing}
                currentRock={currentRock}
                updateRock={updateRock}
              />
          ) : (
                <AddRockForm addRock={addRock} />
            )}
          <RockTable rocks={rocks} editRock={editRock} deleteRock={deleteRock} />
    </div>
  )
}

export default App