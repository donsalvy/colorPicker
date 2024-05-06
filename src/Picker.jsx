import React, {useState} from 'react'


function Picker(){
    const[color, setColor] = useState("#ffffff")



    function handleColorChange(event){
        setColor(event.target.value)  
    }

return(
    <div className='color-picker-container'>

        <h1> Color Picker</h1>
        <div className="color-display" style={{background:color}}>
            <p>Selected Color: {color}</p>
        </div>

        <label>
            <input type="color" value={color} onChange={handleColorChange} />
        </label>
    
    </div>
)

}

export default Picker