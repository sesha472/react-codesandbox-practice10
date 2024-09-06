import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Searchfiletr = () => {
  const [username, setusername] = useState([]);
  const [searchedvaluedata, setsearchedvaluedata] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setusername(res.data);
      setsearchedvaluedata(res.data);
    });
  });

  const serachHAndler = (e) => {
    setsearchedvaluedata(
      username.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value);
      })
    );
  };

  return (
    <div>
      <input type="text" placeholder="serach..." onChange={serachHAndler} />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>website</th>
            <th>email</th>
          </tr>
        </thead>

        {searchedvaluedata.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.website}</td>
                <td>{item.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Searchfiletr;
