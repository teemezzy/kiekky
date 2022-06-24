import React from "react";
import {useSelector} from "react-redux"
import { selectCurrentUser, selectCurrentToken} from "../features/auth/authSlice"
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Hi ${user}!` : " Welcome!";
  const tokenAbbr = `${token.slice(0, 7)}...`

  return (
    <div>
      <div>
        <h1>{welcome}</h1>
        <p>Token: {tokenAbbr}</p>
        <p><Link to="/userslist">Go to the Users List</Link></p>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
