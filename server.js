const express = require('express');
const mongoose = require('mongoose');


const items = require('./routes/api/items');


const app = express();



/*/Conexion a Mongo
mongoose.connect("mongodb+srv://Rob:rob123@crud.chhx1.mongodb.net/crud?retryWrites=true&w=majority", { useNewUrlParser: true }).then(()=> console.log('Conectado a base de datos...'))
    .catch(err => console.log(err));*/

(async function () {

    try {
        const mongooseOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        };
        const db = await mongoose.connect("mongodb+srv://Rob:rob123@crud.chhx1.mongodb.net/crud?retryWrites=true&w=majority", mongooseOptions);
        console.log('Base de datos ha sido conectada a:', db.connection.name);

    } catch (error) {
        console.error(error);
    }
})()


//Routes
app.use('/api/items', items)


//Static assets para produccion
if(process.env.NODE_ENV === 'production'){
    //Agregar carpeta static
    app.use(express.static('client/buid'));

    app.use('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

    const port = process.env.PORT || 5000;

    app.listen(port, ()=> console.log(`Servidor iniciado en ${port}`))