import React from "react"

export default function Header() {
    return (
      <header>
        <img className="header-img" src="../images/erikka.jpeg" />
        <div className="name-container">
            <h1 className="name">Erikka Atienza</h1>
            <h4 className="job-title">Frontend Developer</h4>
            <p className="website">erikkaatienza.website</p>
        </div>
      </header>  
    )
    
}