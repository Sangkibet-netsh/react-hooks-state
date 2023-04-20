import { useState } from "react";


const FavoriteColor = ()=>{
    const [color,setColor] = useState("blue")

    return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Blue</button>
      </>
    )

}
export default FavoriteColor;