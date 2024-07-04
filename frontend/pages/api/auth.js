import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case 'POST':
      const { name, email, password } = req.body;
      // Your registration and login logic here
      res.json({ message: 'Registered/Logged in' });
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
