import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./ToDoList.css"; 
export default function ToDoList() {
    let [todos,setToDos] = useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () => {
        setToDos((prevTodos) => {
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewTodo("");         //for after task is added to list input-text make empty
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setToDos(() => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let todoDone = (id) => {
        // console.log("done");
        setToDos((todos) => (
            todos.map((todo) => {
                if(todo.id == id)
                {
                    return{
                        ...todo,
                        isDone: true
                    }
                }
                else{
                    return todo;
                }
            })
        ))
        // console.log(done);
    }

    let doneAll = () => {
        setToDos((todos) => (
            todos.map((todo) => {
                return{
                    ...todo,
                    isDone:true
                }
            })
        ))
    }

    // let undoneAll = () => {
    //     setToDos((todos) => (
    //         todos.map( (todo) => {
    //                 return{
    //                     ...todo,
    //                     isDone:false
    //                 }
    //             }
    //         )
    //     ))
    // }

    // let styles = {border:2px solid};

    return(
        <div>
            <h2>Daily Todo List</h2>
            <div style={{border:'2px solid white',borderRadius:'8px'}}>
            <input placeholder="Enter task to add" value={newTodo} onChange={updateTodoValue} className="taskInput"></input>
            <br /><br />
            <button onClick={addNewTask}>Add task</button>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id) }>Delete</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => todoDone(todo.id)}>Mark As Done</button>
                            <br /><br />
                        </li>
                        
                    ))
                }
            </ul>

            <br /><br />
            <button onClick={doneAll}>Mark All Done</button>
            <br /><br />
            
        </div>
        </div>
        
    );
}
