import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import * as firebaseAdmin from 'firebase-admin';

firebaseAdmin.initializeApp();

const api = express();
api.use(cors());
api.use(express.urlencoded({ extended: true }));
api.use(express.json());

api.get('/', async (_, res) => {
  res.json('Sup. This is the VendSpace API');
});

api.use(`/test`, require('./routes/test'));
api.use(`/scrape`, require('./routes/scrape'));

// the name of the export is the name of the primary path
export const v1 = functions.https.onRequest(api);
