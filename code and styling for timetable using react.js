import React, { useState } from 'react';
import './App.css';

function App() {
  return(
  <>
  <center>
    <h1>TIME TABLE</h1>
    <table border="1" cellPadding="10" cellspacing="0">
      <tr>
        <th>
          DAY
        </th>
        <th>
          9:00AM
        </th>
        <th>
           9:50AM
        </th>
        <th>
           10:50AM
        </th>
        <th>
          10:50AM-11:00AM
        </th>
        <th>
          11:00AM-12:50PM
        </th>
      </tr>
      <tr>
       
        <th>
          monday
        </th>
        <td>
          java
        </td>
        <td>
           python
        </td>
        <th className="rowspan-color" rowspan={6}>
          BREAK
        </th>
        <td>
          smds
        </td>
        <td>
          ads&a
        </td>
      </tr>
      <tr>
        
        <th>
          Tueday
        </th>
        <td>
        dbms
        </td>
        <td>
           python lab
        </td>
      
        <td>
          ai
        </td>
         <td>
          dl&co
        </td>
      </tr>
      <tr>
        
        <th>
          wednesday
        </th>
        <td>
          java
        </td>
        <td>
          dti
        </td>
      
        <td>
          smds
        </td>
         <td>
         ai
        </td>
      </tr>
      <tr>
        
        <th>
          Thursday
        </th>
        <td>
          java
        </td>
        <td>
          fsd
        </td>
        <td>
          smds
        </td>
         <td>
          ads&a
        </td>
      </tr>
      <tr>
        
        <th>
          friday
        </th>
        <td>
          java
        </td>
        <td>
           python
        </td>
      
        <td>
          smds
        </td>
         <td>
          ads&a
        </td>
      </tr>
      <tr>
        
        <th>
          saturday
        </th>
        <td>
          java
        </td>
        <td>
           web development
        </td>
      
        <td>
          smds
        </td>
         <td>
          ds
        </td>
      </tr>
    </table>
  </center>
  </>
  );
}

export default App;
//css for the above code
h1 {
    text-decoration: dashed;
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    color: aqua;
    margin-bottom: 20px;
    text-align: center;
}

table {
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto 40px auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

th {
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
}

td {
    padding: 12px 15px;
    border: 1px solid #ddd;
    color: black;
    text-align: center;
}

tr:nth-child(even) td {
    background-color: #f9f9f9;
}

tr:hover td {
    background-color: #f1f1f1;
}

.rowspan-color {
    color: pink;
    background-color: #f3eef3;
    font-weight: bold;
}
