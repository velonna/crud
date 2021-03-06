const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || 'localhost';
        this.usersPath = '/api/users';
        this.productsPath = '/api/producto';
        this.carritoPath = '/api/carrito';
        this.middleware();
        this.routes();
    }

         
   

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    
    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.productsPath, require('../routes/productos'));
        this.app.use(this.carritoPath, require('../routes/carrito'));
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://${this.host}:${this.port}`);
        });
    }
}

module.exports = Server;