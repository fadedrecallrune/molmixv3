import React from "react";
import { Table } from "react-bootstrap";
import "../Home.css";

export const DirectionSecondTable = () => (
  <Table striped hover responsive style={{ marginTop: "20px", }}>
    <thead
      style={{ backgroundColor: "green", color: "white", fontSize: "12px" }}
    >
      <tr>
        <th>BioCleaner®</th>
        <th />
        <th>BC 16</th>
        <th>BC 20</th>
        <th>BC 25</th>
        <th>BC 30</th>
        <th>BC 40</th>
        <th>BC 50</th>
        <th>BC 100</th>
        <th>BC 150</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Количество подключенных людей</td>
        <td>[ЭЖ]</td>
        <td>15~20</td>
        <td>20~25</td>
        <td>25~30</td>
        <td>30~35</td>
        <td>40~45</td>
        <td>45~85</td>
        <td>90~125</td>
        <td>125~170</td>
      </tr>

      <tr>
        <td>Количество стоков в сутки (Qmax)</td>
        <td>[м³/сут]</td>
        <td>2,4</td>
        <td>3,0</td>
        <td>3,8</td>
        <td>4,5</td>
        <td>6,0</td>
        <td>7,5</td>
        <td>15,0</td>
        <td>22,5</td>
      </tr>

      <tr>
        <td>Потребляемая мощность</td>
        <td>[Вт]</td>
        <td>280</td>
        <td>550</td>
        <td>1 100</td>
        <td>1 100</td>
        <td>1 100</td>
        <td>1 500</td>
        <td>1 500</td>
        <td>1 500</td>
      </tr>

      <tr>
        <td>Макс. потребление энергии</td>
        <td>[кВтч/суг]</td>
        <td>6,7</td>
        <td>13,2</td>
        <td>26,4</td>
        <td>26,4</td>
        <td>26,4</td>
        <td>36,0</td>
        <td>36,0</td>
        <td>36,0</td>
      </tr>

      <tr>
        <td>Общая масса</td>
        <td>[кг]</td>
        <td>600(310)</td>
        <td>800(370)</td>
        <td>1 200</td>
        <td>1 800</td>
        <td>1 800</td>
        <td>2 400</td>
        <td>2 500</td>
        <td>3 000</td>
      </tr>

      <tr>
        <td rowSpan='3' style={{verticalAlign:'middle'}}>Размеры</td>
        <td>Д [м]</td>
        <td> 2,2 </td>
        <td >3,0</td>
        <td > 3,5</td>
        <td >4,0</td>
        <td > 4,0</td>
        <td >4,0</td>
        <td >5,2</td>
        <td >6,2</td>
      </tr>
      <tr>
        <td>Ш [м]</td>
        <td>2,0</td>
        <td>2,2</td>
        <td>2,2</td>
        <td>2,2</td>
        <td>2,2</td>
        <td>2,2</td>
        <td>2,4</td>
        <td>2,4</td>

      </tr>
      <tr>
        <td>В [м]</td>
        <td>2,6</td>
        <td>2,1</td>
        <td>2,1</td>
        <td>2,6</td>
        <td>2,6</td>
        <td>3,1</td>
        <td>3,1</td>
        <td>3,1</td>

      </tr>
    </tbody>
  </Table>
);
