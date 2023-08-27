import { Request, Response } from "express";

export function aboutController(req: Request, res: Response) {
  res.render('about', { title: 'About' });
}
