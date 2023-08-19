import {Router} from 'express'
import TaskController from '../controllers/TaskController'
import cors from 'cors'

const router = Router()

router.get('/tasks/', cors(), TaskController['index'])

router.get('/tasks/:id', cors(), TaskController['show'])

router.post("/tasks/save", cors(), TaskController['save']);

router.put("/tasks/:id/update", cors(), TaskController['update']);

router.get("/tasks/:id/edit", cors(), TaskController['edit']);

router.delete("/tasks/:id/delete", cors(), TaskController['delete']);

router.put("/tasks/:id/toggledone", cors(), TaskController['toggleDone']);

export default router