import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string,
  title: string,
  completed: boolean
}

const createTodo = (title: string): Todo => {
  return {
    id: uuidv4(),
    title,
    completed: false,
  }
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target.value);
    const newTitle = event.target.value;
    setTitle(newTitle);
    console.log(title);
    
  }

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(title);
    const result = createTodo(title)
    setTodos([...todos, result]);
    setTitle('');
  }

  console.log(todos);
  

  return (
    <div>
      <h1>簡易Todoアプリ</h1>
      <form action="" onSubmit={onSubmitHandler} method="get">
        <label htmlFor="">タイトル：</label>
        <input 
          type="text" 
          value={title}
          onChange={onChangeHandler}
         />
        <input type="submit" value="作成"   />
      </form>
      <hr />
      
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>進捗</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <th>{todo.id}</th>
                <th>{todo.title}</th>
                <th>
                  <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={(event) => {
                      console.log(event.target.checked);
                      
                      const newCompleted = todos.map((_todo) => {
                        if (_todo.id === todo.id) {
                          return {
                            ..._todo,
                            completed: !todo.completed,
                          }
                        }

                        return _todo;
                      })

                      setTodos(newCompleted);
                    }}
                  />

                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
