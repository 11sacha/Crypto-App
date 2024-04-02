import { Link } from "react-router-dom"
import React from 'react';



export default function Header({ back }) {
  return (
    <header className="header">
        <div className="width">
            {back && (
                <a href="/">
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
            )}
            <h1>
                <Link to="/">Crypto App</Link>
            </h1>
        </div>
    </header>
  )
}
