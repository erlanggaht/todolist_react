import { useState } from "react"

function App() {
  const [inputName, setInputName] = useState('')
  const [todo, setTodo] = useState<any>([])

  function handleChange(e: any) {
    setInputName(e.target.value)
  }


  function Add_Todo() {
    if(inputName == '') return alert('input harus di isi!')
    
    // validasi
    const newTodos = [...todo, inputName]
    
    setTodo(newTodos)
    setInputName('')
  }


  // Delete List
  function delete_list(m:any) {
    console.log(m)
  }
  return (
    <div className="m-6">
      <h1 className="text-center font-bold uppercase">Todolist</h1>

      <div className="mt-12 text-center">

        <input name="name" onChange={(e) => handleChange(e)} value={inputName} className="border-b py-2 px-3" placeholder="masukan todo" required />
        <button onClick={() => Add_Todo()} className="ml-3 active:scale-90" >Tambah</button>
        <ul className="text-left my-12">
          {todo && todo.map((m: any, i: number) => {
              return <li key={i}  className="flex justify-between items-center text-lg font-semibold bg-gray-100 py-4 px-4 rounded-md my-3 hover:bg-gray-300 capitalize  shadow text-[#222] hover:text-[#000]">
                <p className="] ">{m}</p> 
                <button className="bg-red-500  text-white p-2 px-4 rounded shadow " onClick={() => delete_list(m)}>Delete</button>
                </li>
          })}

        </ul>
      </div>
    </div>
  )
}

export default App
