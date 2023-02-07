import React from "react";

function AddTodoForm() {

    return (
        <div>
            <form>
                <label htmlFor="todoTitle" >Title</label>
                <input type="text" id="todoTitle" name="todo" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


export default AddTodoForm; 