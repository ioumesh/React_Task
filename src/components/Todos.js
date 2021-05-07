import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Todos = () => {
    const [todoText, setTodotext] = useState("")
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Coding time updates",
            isComplete: false
        },

        {
            id: 2,
            text: "gym time updates",
            isComplete: false
        },

        {
            id: 3,
            text: "movie time updates",
            isComplete: false
        }

    ])
    const changeTodotext = (text) => {

        setTodotext(text.target.value)

    }
    const addTodo = () => {
        const newTodo = {
            id: uuidv4(),
            text: todoText,
            isComplete: false
        }
        setTodos([newTodo, ...todos])
        setTodotext("")
    }

    const completeTodo = (id) => {

        let updateTodo = todos.map(todo => {
            if (todo.id == id) {
                todo.isComplete = true;
                return todo;
            }
            else {
                return todo
            }
        })
        setTodos(updateTodo)
    }
    const deleteTodo = (id) => {
        let deletedTodo = todos.filter(todo => todo.id != id)
        setTodos(deletedTodo)
    }
    return (
        <div className="card shdow">
            <div className="card-header">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your to Do's" value={todoText} onChange={(text) => changeTodotext(text)} />

                    <button type="submit" className="btn btn-primary" onClick={addTodo}>Add</button>
                </div>

            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        todos.map(todo => {
                            return (<>
                                <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                                    <div>
                                        <input type="checkbox" checked={todos.isComplete} onChange={() => completeTodo(todo.id)} />
                                        <span className={todo.isComplete ? 'completed' : null}>{todo.text}</span>
                                    </div>

                                    <i className="fa fa-trash" onClick={() => deleteTodo(todo.id)}></i>
                                </li>


                            </>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}




export default Todos;
