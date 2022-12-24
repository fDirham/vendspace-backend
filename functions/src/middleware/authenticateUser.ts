import { NextFunction, Request, Response } from 'express';
import * as firebaseAdmin from 'firebase-admin';
const firebaseAuth = firebaseAdmin.auth();

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw '';
    const token = authorization.substring(7);
    const decodedToken = await firebaseAuth.verifyIdToken(token);
    const profile = await firebaseAuth.getUser(decodedToken.uid);
    req.body.requestingUser = profile;

    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
}
