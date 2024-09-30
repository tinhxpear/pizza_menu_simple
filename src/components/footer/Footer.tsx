
export const Footer = () => {
    const hour = new Date().getHours();
    const openHour =  12;
    const closeHour = 22;
    const isOpen = hour <= closeHour && hour >= openHour ? `We are open until ${closeHour}:00`  : `We are close until ${openHour}`
  return (
    <footer className="footer"> 
    <div className="order">
      <p>
        {isOpen}
      </p>
      <button className="btn">Order</button>
    </div>
      
    </footer>
  )
}
