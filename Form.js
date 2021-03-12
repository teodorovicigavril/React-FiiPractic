import React from 'react'

const Form = (props) => {
    return(
        <div>
            <form>
                <label>
                    Name:
                    <input typre="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form