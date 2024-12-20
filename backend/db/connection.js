import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('Database connected Successfully')
    } catch (err) {
        console.log(err)
    }
}

export default connectDb