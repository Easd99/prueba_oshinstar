import { Request, Response } from "express";
//import {} from "./helpers/data-to-domain";
import db from "../models";
const Film = db.Film;

export class FilmsControllers {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const films = await Film.findAll();
      return res.status(200).json({
        status: "success",
        data: films,
      });
    } catch (e: any) {
      return res.status(400).json({
        status: "error",
        error: e.message,
      });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description } = req.body;
      if (!title) {
        return res.status(400).json({
          status: "error",
          error: "title must be provided",
        });
      }
      if (!description) {
        return res.status(400).json({
          status: "error",
          error: "description must be provided",
        });
      }
      const film = Film.build({
        title: title,
        description: description,
      });

      await film.save();

      return res.status(201).json({
        status: "success",
        data: film,
      });
    } catch (e: any) {
      return res.status(400).json({
        status: "error",
        error: e.message,
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!Number(id)) {
        return res.status(400).json({
          status: "error",
          data: "id must be a number",
        });
      }
      const film = await Film.findByPk(id);
      if (!film) {
        return res.status(404).json({
          status: "error",
          data: "film not found",
        });
      }
      return res.status(200).json({
        status: "success",
        data: film,
      });
    } catch (e: any) {
      return res.status(400).json({
        status: "error",
        error: e.message,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!Number(id)) {
        return res.status(400).json({
          status: "error",
          data: "id must be a number",
        });
      }
      const film = await Film.findByPk(id);
      if (!film) {
        return res.status(404).json({
          status: "error",
          data: "film not found",
        });
      }
      await film.destroy();
      return res.status(204).json({
        status: "success",
        data: "",
      });
    } catch (e: any) {
      return res.status(400).json({
        status: "error",
        error: e.message,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      if (!Number(id)) {
        return res.status(400).json({
          status: "error",
          data: "id must be a number",
        });
      }
      const film = await Film.findByPk(id);
      if (!film) {
        return res.status(404).json({
          status: "error",
          data: "film not found",
        });
      }
      if (title) {
        film.title = title;
      }
      if (description) {
        film.description = description;
      }
      film.save();
      return res.status(200).json({
        status: "success",
        data: film,
      });
    } catch (e: any) {
      return res.status(400).json({
        status: "error",
        error: e.message,
      });
    }
  }
}
