import { Request, Response } from "express";

export function page404Controller(req: Request, res: Response) {
  // we need to manually set the status here to indicate it's a Not Found Error
  res.status(404)
    .render('404', { title: '404' });
}
