import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">AppContacts</a>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item ml-auto d-inline-block mr-2">
                            <Link to="/Liste" className="nav-link">Liste contact</Link>
                        </li >
                        <li className="nav-item ml-auto d-inline-block mr-2">
                            <Link to="/addContact" className="nav-link">Ajouter contact</Link>
                        </li>
                        <li className="nav-item ml-auto d-inline-block mr-2">
                            <Link to="/aPropos" className="nav-link">A propos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

