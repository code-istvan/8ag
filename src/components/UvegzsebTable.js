import React from "react";
import Table from "react-bootstrap/Table";
import "./UvegzsebTable.css";

const UvegzsebTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="firstLineColor">
          <th></th>
          <th>Dátum</th>
          <th>Név</th>
          <th>Összeg</th>
        </tr>
      </thead>
      <tbody>
        <tr className="secondLineColor">
          <td>1</td>
          <td>2021.02.17</td>
          <td>N. György</td>
          <td>100.000.-</td>
        </tr>
        <tr className="firstLineColor">
          <td>2</td>
          <td>2021.03.17</td>
          <td>Stefanovics Angéla</td>
          <td>20.000.-</td>
        </tr>
        <tr className="secondLineColor">
          <td>3</td>
          <td>2021.04.13</td>
          <td>Bimba András Imre</td>
          <td>10.000.-</td>
        </tr>
        <tr className="firstLineColor">
          <td>4</td>
          <td>2021.04.13</td>
          <td>Krébesz Andrea</td>
          <td>10.000.-</td>
        </tr>
        <tr className="secondLineColor">
          <td>5</td>
          <td>2021.04.15</td>
          <td>N. György</td>
          <td>20.000.-</td>
        </tr>
        <tr className="firstLineColor">
          <td>6</td>
          <td>2021.04.19</td>
          <td>Sz. I.</td>
          <td>10.000.-</td>
        </tr>
        <tr className="secondLineColor">
          <td>7</td>
          <td>2021.05.25</td>
          <td>Tuka Anita</td>
          <td>4.000.-</td>
        </tr>
        <tr className="firstLineColor">
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="secondLineColor">
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="firstLineColor">
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UvegzsebTable;
