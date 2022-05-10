/* eslint no-eval: 0*/
import React , {useState} from 'react'
import Resultado from './Componentes/Resultado'
import OperacionMath from './Componentes/OperationMath'
import Funciones from './Componentes/Funciones'
import Numeros from './Componentes/Numeros'
import words from 'lodash.words'
import './App.css'

 /*sin valor va a alojar un string vacio. y a eso siempre le vamos a sumar el numero que
clickiemos asi vamos a poder poner todos los numeros que queramos*/
/*si los backtips estan uno al lado del otro*/
const App = () => {
  const [sinvalor , setSinvalor] = useState("")
const items = words(sinvalor, /[^-^+^*^/]+/g) /* Usamos libreria loast. esta funcion words nos da un array q tiene cada uno de los numeros que el usuario va introduciendo y en resultado ponemos eso y con todo esto hacemos que las operaciones matematicas no se vean (osea el +-:x)*/
const valor = items.length > 0 ? items[items.length-1] : "0"; /*Hicimos esto xq el 0 aparecia x defecto y no era intencional asi q con esto si es intencional*/
return (
    <main className='CalculadoraReact'>
        <Resultado valor={valor} /> 
        <Numeros ClickNumeros={numeros =>{
         setSinvalor(`${sinvalor}${numeros}`)}}/> 
        <Funciones EliminarTodo={()=>{
         setSinvalor("")}}
         Eliminar={()=> {
           if(sinvalor.length > 0) {
          const newSinvalor= sinvalor.substring(0, sinvalor.length - 1)
          setSinvalor(newSinvalor)}}}/>
        <OperacionMath OperacionClick={operacion =>{
          setSinvalor(`${sinvalor}${operacion}`)}} 
         OperacionIgual = {igual =>{
           console.log("Igual",igual)
         setSinvalor(eval(sinvalor).toString())}}/> 
         </main>) /*Usamos la Funcion Eval*/
}
export default App

