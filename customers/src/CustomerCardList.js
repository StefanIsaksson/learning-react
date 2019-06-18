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
              maritalStatus={customer.maritalStatus} 
              address={customer.address} 
              lastUpdated={customer.lastUpdated} 
              gender={customer.gender} 
              age={customer.age} 
              />
          );
        })
      }
    </div>
  );
}

export default CustomerCardList;