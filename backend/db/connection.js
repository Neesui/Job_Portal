import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('Database connected Successfully')
    } catch (error) {
        console.log(err)
    }
}

 export default connectDb