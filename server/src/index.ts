import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from 'typeorm';
import * as bodyParser from "body-parser";

import { Article } from './entity/Article';

createConnection().then(connection => {
  const articlesRepository = connection.getRepository(Article);

  const app = express();
  app.use(bodyParser.json());  

  app.get('/articles', async function(req: Request, res: Response){
    const articles = await articlesRepository.find();
    res.json(articles);
  });

  app.post('/insert', async function(req: Request, res: Response) {
    const article = await articlesRepository.create(req.body);
    const results = await articlesRepository.save(article);
    return res.send(results);
  });

  app.listen(3000);
});


