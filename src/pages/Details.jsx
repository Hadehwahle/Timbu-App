import { NavLink } from "react-router-dom";
function Details() {
  return (
    <section className="details">
      <div className="details-1">
        <div className="border">
          <img src="images/nikemini.png" alt="nike" />
        </div>
        <div>
          <img src="images/nikemini2.png" alt="nike" />
        </div>
        <div>
          <img src="images/nikemini3.png" alt="nike" />
        </div>
        <div>
          <img src="images/nikemini4.png" alt="nike" />
        </div>
      </div>
      <div className="details-2">
        <img src="images/nikebig.png" alt="nike" />
      </div>
      <div className="details-3">
        <h1>NIKE AIR MAX</h1>
        <p>
          Experience the ultimate in comfort and style with the Nike Air Max.
        </p>
        <h2>$370</h2>
        <button>–</button> <span>1</span> <button>+</button>
        <NavLink to="cart">
          <button className="atc">ADD TO CART</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Details;
