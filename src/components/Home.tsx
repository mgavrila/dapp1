import { SendTransactions } from './SendTransactions';
import { useState, useEffect } from 'react';
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
    <div>
      <h1>Welcome to dapp1</h1>
      <SendTransactions eventEmitter={eventEmitter} />

      {transactions?.map((transaction, index) => {
        return (
          <div
            key={index}
            style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
          >
            <p>Nonce: {transaction.nonce}</p>
            <p>Hash: {transaction.hash}</p>
            <p>Sender: {transaction.sender}</p>
            <p>Receiver: {transaction.receiver}</p>
          </div>
        );
      })}
    </div>
  );
};
