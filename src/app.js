import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import express, {urlencoded} from 'express'
import bodyParser from 'body-parser'

import routes from "./routes/routes";
import './database';

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)

export default app