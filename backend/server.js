import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import companyRoute from './routes/companyRoute.js'
import jobRoute from './routes/jobRoute.js'
import applicationRoute from './routes/applicationRoute.js'
import connectDb from "./db/connection.js" 


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173', // Correct CORS origin
    credentials: true, // Correct 'credentials' property
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;


// User Routes
app.use('/api/users', userRoute); 
app.use('/api/companys', companyRoute); 
app.use('/api/jobs', jobRoute); 
app.use('/api/applications', applicationRoute); 


// Start server
app.listen(PORT, () => {
    connectDb()
    console.log(`Server is running at port: ${PORT}`);
});