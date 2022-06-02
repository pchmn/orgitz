import { initSdk, Request, Response } from '@shared/appwrite';

export default async function index(req: Request, res: Response) {
  try {
    const { account } = initSdk();

    res.json({ areDevelopersAwesome: true });
  } catch (err) {
    console.error(err);
    throw err;
  }
}