import Pizza from "../pizza/Pizza"
import { pizzaData } from "../../pizzaData"
const Menu = () => {
  return (
    <div className="menu">
        <h2>Our menu</h2>
        {pizzaData ? (<ul className="pizzas">
          {pizzaData.map((pizza) => 
          <Pizza key={pizza.name} pizzaObj={pizza}/>)}
        </ul>) :(<p>We are still working on our menu. Please come back later :))</p>)}
        
        
    </div>
  )
}

export default Menu