import { configureStore } from "@reduxjs/toolkit";4
import trainer from './slices/trainer.slice'

export default configureStore({
    reducer:{
        trainer
    }
})