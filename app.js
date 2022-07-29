const express = require("express");
const fs = require("fs")
const app = express();

const token = 'dadcrfefedw';

app.use(express.json())
app.use((req, res, next) => {
  if (req.headers.authorization && req.headers.authorization != token ) {
    next(res.status(403).json({mensaje: 'Por favor ingrese un token valido'}))
  } else if (!req.headers.authorization){
    next(res.status(401).json({mensaje: 'Por favor ingrese el header Authorization'}))
  }
  next()
})


let listaNombres = JSON.parse(fs.readFileSync('./listaNombres.json', 'utf8'))

app.get("/contactos", (req, res, next) => {
  res.json(listaNombres);
});

app.get("/contactos/:id", (req, res, next) => {
  res.json(
    listaNombres.filter((contacto) => {
      if (contacto.id == req.params.id) {
        return contacto;
      }
    })
  );
});

app.post("/contactos", (req, res) => {
   const {nombre, apellido, telefono} = req.body;
   listaNombres.push({
    nombre: nombre,
    apellido,
    id: listaNombres.length + 1,
    telefono
   })
   fs.writeFileSync('./listaNombres.json', JSON.stringify(listaNombres))
   res.send("Creado correctamente")
})


app.delete("/contactos/:id", (req, res, next) => {
    listaNombres = listaNombres.filter((contacto) => {
        if (contacto.id != req.params.id) {
          return contacto;
        }
      })
    fs.writeFileSync('./listaNombres.json', JSON.stringify(listaNombres))
    res.send("Borrado correctamente")
})

app.put("/contactos/:id", (req, res, next) => {
  const {nombre,apellido,telefono} = req.body
    const position = listaNombres.findIndex((element) => element.id == req.params.id)
  listaNombres[position] = {
    nombre,
    apellido,
    id:req.params.id,
    telefono
  }
  fs.writeFileSync('./listaNombres.json', JSON.stringify(listaNombres))
  res.send("Editado correctamente")
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
