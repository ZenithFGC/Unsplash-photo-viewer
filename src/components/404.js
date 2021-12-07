import React from 'react';
import { Link } from 'react-router-dom';
import  "../styles/404.css";

const PageNotFound = () => {
  return (
      <div className="404">
        <h1>404</h1>
        <h2>Ошибка. Страница не найдена!</h2>
        <Link className="linkToHome" to="/home">На главную</Link>
      </div>
  )
}

export default PageNotFound