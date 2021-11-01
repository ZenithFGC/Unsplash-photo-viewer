import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
      <div className="">
        <h1>404</h1>
        <h2>Ошибка. Страница не найдена!</h2>
        <Link className="" to="/">На главную</Link>
      </div>
  )
}

export default PageNotFound