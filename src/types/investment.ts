export interface Investment {
    id: string;
    name: string;
    amount: number;
    date: string;
    type: 'stock' | 'bond' | 'real estate' | 'crypto' | 'other';
    currentValue: number;
    notes?: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  