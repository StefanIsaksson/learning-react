import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import RockTable from './Tables/RockTable'
import AddRockForm from './Forms/AddRockForm'
import EditRockForm from './Forms/EditRockForm'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const rocksData = []

  const updateRockList = () => {
    axios.get('/api/v1/rocks/').then(
      response => {
        console.log(response.data);
        setRocks(response.data);
      }
    )
  }

  useEffect(
    () => { updateRockList(); }, []
  );

  const initialFormState = { id: null, name: '', visualDescription: '', pictureUrl: '' }

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

    axios.patch(`/api/v1/rocks/${id}`, updatedRock).then(
      () => {
        updateRockList();
      }
    );
  }

  const editRock = rock => {
    setEditing(true)

    setCurrentRock({ id: rock.id, name: rock.name, visualDescription: rock.visualDescription, pictureUrl: rock.pictureUrl })
  }

  return (
    <div className="container">
    <Router>
      <div>
        <Route path="/" exact render={() => <RockTable rocks={rocks} editing={editing} editRock={editRock} deleteRock={deleteRock} />} />
        <Route path="/add/" render={() => <AddRockForm addRock={addRock} />} />
        <Route path="/edit/" render={() => <EditRockForm editing={editing} setEditing={setEditing} currentRock={currentRock} updateRock={updateRock} />} />
      </div>
    </Router>
    </div>
  )
}

export default App