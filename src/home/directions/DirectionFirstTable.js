import React from 'react'
import { Table } from 'react-bootstrap'
import '../Home.css'

export const DirectionFirstTable = () => (
  <Table striped hover responsive style={{marginTop:'20px'}} >
    <thead style={{backgroundColor:'green', color:'white'}} >
      <tr>
        <th>BioCleaner®</th>
        <th></th>
        <th>BC 4</th>
        <th>BC 6</th>
        <th>BC 10</th>
        <th>BC 12</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>Количество подключенных людей</td>
        <td>[ЭЖ]</td>
        <td>2~5</td>
        <td>5~8</td>
        <td>9~11</td>
        <td>12~15</td>
      </tr>

      <tr>
        <td>Количество стоков в сутки (Qmax)</td>
        <td>[м³/сут]</td>
        <td>0,9</td>
        <td>1,4</td>
        <td>2,3</td>
        <td>2,7</td>
      </tr>

      <tr>
        <td>Потребляемая мощность</td>
        <td>[Вт]</td>
        <td>76 (64)</td>
        <td>144</td>
        <td>183</td>
        <td>221</td>
      </tr>

      <tr>
        <td>Макс. потребление энергии</td>
        <td>[кВтч/суг]</td>
        <td>1,2</td>
        <td>2,0</td>
        <td>2,9</td>
        <td>3,7</td>
      </tr>

      <tr>
        <td>Общая масса</td>
        <td>[кг]</td>
        <td>150</td>
        <td>165</td>
        <td>180</td>
        <td>230</td>
      </tr>

      <tr>
        <td>Диаметр</td>
        <td>[мм]</td>
        <td>1 400</td>
        <td>1 600</td>
        <td>1 700</td>
        <td>1 900</td>
      </tr>

      <tr>
        <td>Высота</td>
        <td>[мм]</td>
        <td>1 600</td>
        <td>1 600</td>
        <td>2 350</td>
        <td>2 510</td>
      </tr>

      
    </tbody>
  </Table>
)