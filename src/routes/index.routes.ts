import {Router} from "express";

import filmsRoutes from "./film.routes";

const indexRoutes = Router()

indexRoutes.use('/films', filmsRoutes)

export default indexRoutes