import express  from "express";
import { 
    createUser, 
    getAllUsers, 
    getSingleUser, 
    removeUser, 
    replaceUser, 
    updateUser
} from '../controller/user.js'

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getSingleUser)
userRouter.put('/:id', updateUser)
userRouter.patch('/:id', replaceUser)
userRouter.delete('/:id', removeUser)

export { userRouter }