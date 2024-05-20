// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import { coders } from '../../public/data/database.js'

import { listWihtInnerHtml, create, deleateItem } from './operation.js'
import { showSmallAlerSucces } from './alert.js'


const tbody = document.querySelector("tbody")
const table = document.querySelector("table")
const form = document.querySelector("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnSave = document.getElementById("btn-save")
let idParaActualizar

form.addEventListener('submit', function (event) {
    
   if (idParaActualizar === undefined) {
      create(coders,name,lastName,email)
      showSmallAlerSucces("Creado con exito")
   }else{
      for (const coder of coders) {
         if (coder.id == idParaActualizar) {
         
            coder.name = name.value
            coder.lastName = lastName.value
            coder.email = email.value
   
         }
      }

      showSmallAlerSucces("Update")
      idParaActualizar=undefined
   }


   // if (form.checkValidity()) {
   //    create(coders, name, lastName, email)
   //    showSmallAlerSucces("save")
   // }

   form.reset()
   event.preventDefault()
   listWihtInnerHtml(coders, tbody)
})


table.addEventListener('click',function (event) {

   if (event.target.classList.contains("btn-danger")) {
      const ideliminar = event.target.getAttribute("data-id")
      deleateItem(coders,ideliminar)
      listWihtInnerHtml(coders,tbody)
      showSmallAlerSucces("deleted")
      
   }

   if (event.target.classList.contains("btn-warning")){
         idParaActualizar = event.target.getAttribute("data-id")
         console.log(idParaActualizar);
         //vamos a buscar al usuario en la base de datos
         const userFound = coders.find((coder) => coder.id == idParaActualizar)

         //pintar los datos nueva mente en el formulario
         name.value=userFound.name
         lastName.value=userFound.lastName
         email.value=userFound.email

   }




})
listWihtInnerHtml(coders, tbody)


