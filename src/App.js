import { React, useState, useEffect } from 'react'
import './components/app.css'
export default function App() {
  const [data, setData] = useState([])
  const [inputText, setinputText] = useState("")
  const [show, setShow] = useState("all")
  const [filtered, setfiltered] = useState([])
  useEffect(() => {
    savelocal();
    filteredItems();
    console.log("hey")
  }, [data, show])



  const getInput = (e) => {
    setinputText(e.target.value)
  }
  const addTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setMessagError('')
      const newTodo = {
        id: Math.random(),
        text: inputText,
        completed: false,
        editing: false
      }
      setData([...data].concat(newTodo));
      setinputText('')
    } else {
      setMessagError('Vous n\'avez pas entrer un todo')
      return false
    }
  }

  const editElement = (element) => {
    const index = data.findIndex((x) => x.id === element.id);
    const todo = Object.assign({}, data[index]);
    todo.edit = true;
    const newTodos = Object.assign([], data);
    newTodos[index] = todo;
    setData(newTodos)

  }

  const accept = (element) => {
    const index = data.findIndex((x) => x.id === element.id);
    const todo = Object.assign({}, data[index]);
    todo.edit = !todo.edit;
    todo.text = inputText;
    if (inputText.trim() !== '') {
      const newTodos = Object.assign([], data);
      newTodos[index] = todo;
      setData(newTodos)
      setinputText('')
    }
  }

  const deleted = (element) => {
    setData(data.filter((x) => x.id !== element.id))
  }
  const checker = (element) => {
    const index = data.findIndex((x) => x.id === element.id);
    const todo = Object.assign({}, data[index]);
    todo.completed = !todo.completed;
    const newTodos = Object.assign([], data);
    newTodos[index] = todo;
    setData(newTodos)
  }
  const completed = data.filter((element) => !element.completed);
  const uncompleted = data.filter((element) => element.completed === true)
  const filteredHandler = (e) => {
    setShow(e.target.name);
  }
  const [messagError, setMessagError] = useState('')

  const filteredItems = () => {
    switch (show) {
      case 'todo':
        setfiltered(data.filter((x) => x.completed === false));
        break;
      case 'completed':
        setfiltered(data.filter((x) => x.completed === true));
        break;
      default:
        setfiltered(data);
        break;

    }
  }
  const savelocal = () => {
    localStorage.setItem('data', JSON.stringify(data))
  }



  const tous = () => {
    const liste = Object.assign([], data);
    const newData = liste.map((e) => e.completed === false ? { ...e, completed: true } : e)
    setData(newData)

  }

  useEffect(() => {
    const tables = localStorage.getItem('my-data');
    if (tables) {
      setData(JSON.parse(tables))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('my-data', JSON.stringify(data))
  })

  return (
    <>

      <div className='container title'><h1>TODOS</h1></div>
      <div className='container d-flex mt-5 justify-content-center'>
        <form onSubmit={addTodo} className='form' ><input type="text" value={inputText} onChange={getInput} /><button className='button' type='submit'>Ajouter</button>

        </form>
        {messagError !== '' && <p style={{ marginLeft: '20px', color: 'red', outline: 'none', border: 'none' }}>{messagError}</p>}
      </div>
      <div className="container mt-5">

        <div className="filter">
          <div className='container'>

            {filtered.map((element) => <div className={`list-group-item  listes ${element.completed && 'completed'}`} key={element.id}>

              {<p>{element.text} <input checked={element.completed} className='checkbox' onChange={() => checker(element)} type="checkbox" /> <span> <button onClick={() => editElement(element)} className='edit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg></button>
                <button onClick={() => deleted(element)} className='delete'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg></button></span>
                {element.edit && <span><input type="text" onChange={getInput} /><button onClick={() => accept(element)}>valider</button></span>}
              </p>}





            </div>)}
          </div>
          <div className="links">
            <div className="row">
              <div className="col-md-4 left">
                <div className='mention'>
                  <p>{completed.length} {completed.length > 1 ? `Tâches` : `Tâche`} à faire /  </p>
                  <p> {uncompleted.length} {uncompleted.length > 1 ? ' Achevées' : `Achevée`} </p>

                </div>
              </div>

              <div className="col-md-8 right">
                <div className="buttons">

                  <input onClick={filteredHandler} name='all' type='button' value='Toutes' />
                  <input onClick={filteredHandler} name='completed' type='button' value='Achevées' />
                  <input onClick={filteredHandler} name='todo' type='button' value='À faires' />
                </div>
              </div>
            </div>



          </div>
        </div>
        <button className='btn btn-light btn-sm mt-3 mr-2' onClick={tous}>Tout séléctioner</button>
        <button className='btn btn-light btn-sm mt-3 mr-2' onClick={() => setData([])}>Tout supprimer</button>
      </div>
      <footer>
        <p>
          By TaxHash 2021
        </p>
      </footer>
    </>
  )
}
