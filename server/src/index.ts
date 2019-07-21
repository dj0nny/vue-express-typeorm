import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from 'typeorm';
import * as bodyParser from "body-parser";

import { Article } from './entity/Article';
import { Writer } from './entity/Writer';

createConnection().then(connection => {
  const articlesRepository = connection.getRepository(Article);
  const writersRepository = connection.getRepository(Writer);

  const app = express();
  app.use(bodyParser.json());  

  app.get('/articles', async function(req: Request, res: Response){
    const articles = await articlesRepository.find();
    res.json(articles);
  });

  app.post('/insertArticle', async function(req: Request, res: Response) {
    const article = await articlesRepository.create(req.body);
    const results = await articlesRepository.save(article);
    return res.send(results);
  });

  app.get('/writers', async function(req: Request, res: Response) {
    const writers = await writersRepository.find();
    res.json(writers);
  })

  app.post('/insertWriter', async function(req: Request, res: Response) {
    const writer = await writersRepository.create(req.body);
    const results = await writersRepository.save(writer);
    return res.send(results);
  });

  app.listen(3000);
});


