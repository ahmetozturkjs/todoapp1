import React,{useState,useEffect} from "react";

function App() {

  const[todoText,setTodoText]=useState("");

  const handleSubmit=(event)=>{
      event.preventDefault();
      if(todoText===""){
        alert("todo cant be empty");
        return;
      }

  }

  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
              value={todoText}
              type="text" 
              class="form-control" 
              placeholder="Type your todo"
              onChange={(event)=>setTodoText(event.target.value)}            
          />
          <button className="btn btn-primary" type="submit" id="button-addon2">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default App;
