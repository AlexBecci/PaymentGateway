'use client'

import { useState, useEffect } from 'react';
import Select from '../components/Select';

export function IndexPage() {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle payment submission logic here
  };

  return (
    <div>
      <h1>Cryptocurrency Payment Gateway</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="concept">Concept:</label>
          <input
            type="text"
            id="concept"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <Select /* onChange={(value) => setCurrency(value)} */ />
        </div>
        <button type="submit">Create Payment</button>
      </form>
    </div>
  );
}