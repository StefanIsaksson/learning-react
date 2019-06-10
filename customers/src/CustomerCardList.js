import React from 'react';
import CustomerCard from './CustomerCard';

const CustomerCardList = ({ customers }) => {
  return (
    <div>
      {
        customers.map((customer, i) => {
          return (
            <CustomerCard 
              key={i}
              id={customer.id}
              name={customer.name}
              ssn={customer.customerId}
              income={customer.income}
              score={customer.score} 
              partnerName={customer.partnerName} 
              />
          );
        })
      }
    </div>
  );
}

export default CustomerCardList;