const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const apiRoutes = require('./routes/api.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/apis', apiRoutes); 

const adminRoutes = require('./routes/admin.routes');
app.use('/api/admin', adminRoutes);

module.exports = app;
