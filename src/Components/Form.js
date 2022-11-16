import { useState } from "react"

const Form = ({
    handleSubmit, 
    itemInput, 
    setItemInput,
    }) => {

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter your to do list here:
                <input 
                    type="text"
                    value={itemInput}
                    onChange={(event) => setItemInput(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">submit</button>
        </form>
    )
}

export default Form