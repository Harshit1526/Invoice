import express from 'express';
import { auth } from '../middleware/auth.js';
import Invoice from '../models/Invoice.js';

const router = express.Router();

// Get all invoices for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const invoices = await Invoice.find({ userId: req.userId });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new invoice
router.post('/', auth, async (req, res) => {
  try {
    const invoice = new Invoice({
      ...req.body,
      userId: req.userId,
    });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an invoice
router.put('/:id', auth, async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    res.json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an invoice
router.delete('/:id', auth, async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    res.json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;