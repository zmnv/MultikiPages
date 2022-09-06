import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import RandomButton from "../UI/RandomButton";

export function Main() {
    return(
        <div>
            <h1>Main Page</h1>
            <h2>
                <nav>
                    <ul>
                        <li>
                        <Link to="/anime">Catalog</Link></li>
                    </ul>
                </nav>
            </h2>
            {RandomButton()}
            

        </div>
    )
}