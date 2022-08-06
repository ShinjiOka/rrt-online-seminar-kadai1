
function App() {
  return (
    <div>
      <h1>簡易Todoアプリ</h1>
      <form action="">
        <label htmlFor="">タイトル：</label>
        <input type="text" />
        <input type="submit" value="作成" />
      </form>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>進捗
              <input type="checkbox" />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default App
