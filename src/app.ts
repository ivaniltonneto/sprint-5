import 'reflect-metadata'
import express from 'express'
import "express-async-errors"
import handleErrorMiddleware from './middlewares/handleError.middleware'
import userRoutes from './routes/users.routes'
import sessionRoutes from './routes/sessions.routes'
import paymentInfosRoutes from './routes/paymentInfos.routes'
import playlistRoutes from './routes/playlists.routes'
import songsRoutes from './routes/songs.routes'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/payment_infos', paymentInfosRoutes)
app.use('/playlists', playlistRoutes)
app.use('/songs', songsRoutes)

app.use(handleErrorMiddleware)
app.listen(3000, () => {
    console.log('Server running in port 3000')
})