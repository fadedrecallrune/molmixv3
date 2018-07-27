import React from 'react'
import { Table } from 'react-bootstrap'
import './AboutUs.css'


export const AboutUsTable = () => (
  <Table bordered  hover striped >
    <thead className='aboutus-table-head' >
      <tr >
        <th >Гарантированные параметры обработки воды технологией BIO Cleaner® - соответствующая директива №89 / 106 / EEC Европейской комиссией</th>
        <th>Максимальные значения параметров в соответствии с постановлением №6 / 9.11.2000, МООСВР</th>

      </tr>
    </thead>

    <tbody style={{backgroundColor:'#B8D2A2'}} >
      <tr>
        <td>БПК5 ≤ 5,6 мг/л</td>
        <td>БПК5 ≤ 25 мг/л</td>
      </tr>

      <tr>
        <td>ХПК ≤ 49,0 мг/л</td>
        <td>ХПК ≤ 125 мг/л</td>
      </tr>

      <tr>
        <td>Нерастворимые вещества ≤ 12,5 мг/л</td>
        <td>Нерастворимые вещества ≤ 35 мг/л</td>
      </tr>

      <tr>
        <td>Общ фосфор ≤ 0,3 мг/л</td>
        <td>Общ фосфор ≤ 2 мг/л</td>
      </tr>

      <tr>
        <td>Общ азот ≤ 9,6 мг/л</td>
        <td>Общ азот ≤ 15 мг/л</td>
      </tr>
    </tbody>
  </Table>
)