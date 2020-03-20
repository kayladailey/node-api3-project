//Imports
const express = require ('express');
const server = express();
const userRoutes = require('./posts/postRoutes');

//Telling Express to use json for response
server.use(express.json());
// base url for our CRUD Routes in the pstRoutes folder
server.use ('/:id', userRoutes);

//Port we want to see our application on 
server.listen(8000, () => console.log('API running on port 8000'));