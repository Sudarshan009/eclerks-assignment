import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1 className="headerTitle">eClerks Assignment</h1>
        </a>
      </div>
      <div>
        <a className="headerBtn" href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a className="headerBtn" href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
