import React from 'react'
import './Main_menu.css';

  let state = {
    services : [
      "Home","About","Investor Services","Notifications","Schemes/Policies","Act & Rules","Land Bank","Store Purchase Org.","118 Permission","Apply Online"
    ]
  }

  let listItems = state.services.map((item) => <li className="nav-item" key={item}>
  <a className="nav-link text-white" aria-current="page" href="#" >{item}</a>
</li>);

const Main_menu = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <a className="navbar-brand" href="#">Menu</a> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {listItems}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Main_menu;
