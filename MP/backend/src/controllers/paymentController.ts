import { Request, Response } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('your-stripe-secret-key', { apiVersion: '2020-08-27' });

export const processPayment = async (req: Request, res: Response) => {
  const { amount, currency, source } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: source,
      confirm: true,
    });
    res.status(201).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
