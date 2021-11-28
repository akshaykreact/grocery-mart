import React from "react";

export default function Header(props) {
    const { counCartItems } = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Grocecey Mart</h1>
                </a>
            </div>
             <div>
                <a href="#/cart">
                    Cart{''}
                    {counCartItems ? (
                        <button className="badge">{counCartItems}</button>
                    ) : (
                        ''
                    )}
                </a><a href="#/signin"> SignIn</a>
            </div>

        </header>
    );
}