import {Router} from 'express'
import {FilmsControllers} from "../controllers/film.controllers"

const filmsRoutes = Router()

const filmsController = new FilmsControllers()

filmsRoutes.route("/")
    .get(filmsController.getAll)
    .post(filmsController.create)

    filmsRoutes.route("/:id")
    .get(filmsController.getById)
    .delete(filmsController.delete)
    .patch(filmsController.update)


export default filmsRoutes