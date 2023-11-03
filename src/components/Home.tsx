import { SendTransactions } from './SendTransactions';
import { useState, useEffect } from 'react';
import { Card } from '@amg/styleguide';
import { Link } from 'react-router-dom';

export const Home = ({ eventEmitter }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    eventEmitter.listen((payload) => {
      if (payload.type === 'result') {
        setTransactions(payload.data);
      }
    });
  }, []);

  return (
    <div
      className='flex justify-center'
      style={{ height: 'calc(100vh - 120px)' }}
    >
      <Card className='max-w-7xl h-full'>
        <div className='flex flex-col justify-center items-center text-gray-700 gap-2'>
          <h1>Welcome to dapp1</h1>
          <SendTransactions eventEmitter={eventEmitter} />

          <Link to='/dapp1/page1'>Page1</Link>
          <Link to='/dapp1/page2'>Page2</Link>
        </div>

        {transactions?.map((transaction, index) => {
          return (
            <div key={index} className='flex flex-col gap-1'>
              <p>Nonce: {transaction.nonce}</p>
              <p>Hash: {transaction.hash}</p>
              <p>Sender: {transaction.sender}</p>
              <p>Receiver: {transaction.receiver}</p>
            </div>
          );
        })}
      </Card>
    </div>
  );
};
