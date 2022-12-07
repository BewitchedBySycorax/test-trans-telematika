import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../db/database';
import { File } from '../types/File';

export const getFiles = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT title, secret, pdf_data FROM files_list ORDER BY id ASC');
    const rows: Array<File> = response.rows;
    return res.status(200).json(rows);

  } catch (e) {
    console.error(e);
    return res.status(500).json('Internal Server error!');
  }
};

export const getFileBySecret = async (req: Request, res: Response): Promise<Response> => {
  try {
    const secret: string = req.params.secret;
    const response: QueryResult = await pool.query('SELECT title, pdf_data FROM files_list WHERE secret = $1', [secret]);
    const rows: Array<File> = response.rows;

    if (!rows.length) {
      return res.status(404).json({ message: 'File not found, please, check if the link is correct!' });
    }

    res.setHeader('Content-type', 'application/pdf');
    res.setHeader('Content-disposition', `attachment; filename=${rows[0].title}.pdf`);
    res.setHeader('Content-Length', rows[0].pdf_data.length);

    return res.send(rows[0].pdf_data);

  } catch (e) {
    console.error(e);
    return res.status(500).json('Internal Server error!');
  }
};
