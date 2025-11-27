import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import userRouters from './routes/userRouters.js';
import connectDB from './config/db.js';
import { swaggerDocs } from './swagger.js';



dotenv.config();
const app = express();
swaggerDocs(app);


app.use(express.json());

connectDB();

app.use('/api/users', userRouters);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});