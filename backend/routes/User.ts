import { signup, login } from '../auth';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/addaccount', async (req: Request, res: Response) => {
    try {
        console.log(req.body);
      const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
  
      if (!token) {
        return res.status(401).json({ error: 'Authorization token missing' });
      }
  
      const decodedToken = jwt.verify(token, 'Hannibal') as { userId: string };
  
      const { accountName, initialBalance } = req.body;
  
      // Find the user by decoded token
      const user = await User.findById(decodedToken.userId);
  
      // If user not found, return 404
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Create the account
      user.accounts.push({
        name: accountName,
        solde: parseFloat(initialBalance)
      });
  
      await user.save();
  
      res.status(201).json({ user });
    } catch (error: any) {
      console.error('Error creating account:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // GET route to fetch all users and their accounts
  router.get('/getaccount', async (req: Request, res: Response) => {
    try {
      // Fetch all users with their accounts
      const users = await User.find().select('email accounts').exec();
  
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', (error as Error).message);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

export default router;
