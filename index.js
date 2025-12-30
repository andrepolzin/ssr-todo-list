import express from 'express'
import sequelize from './db/conn.js'
import taskRoutes from './routes/taskRoutes.js'
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.use('/tasks', taskRoutes)

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use((req, res, next) => {
    res.status(404).send('Content not found')
})


async function init() {
    try {
        await sequelize.authenticate()
        console.log('DB connected')

        await sequelize.sync({force: false})

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })

    } catch (error) {
        console.error('Failed to start the server', error);
        process.exit(1)
    }
}

init();
