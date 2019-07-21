import { Router } from 'express';

const router = Router();
const obj = {
  id: 6,
  object: 'Purchase',
  amount: 5000,
  amount_refunded: 0,
  captured: true,
  created: 1550634477,
  currency: 'USD',
  livemode: false,
  paid: true,
  refunded: true,
  status: 'succeeded'
};

router.post('/', (req, res) => {
    
});

export default router;
