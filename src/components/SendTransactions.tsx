export const SendTransactions = ({ eventEmitter }) => {
  const onClick = () => {
    eventEmitter.emit({
      type: 'transaction',
      data: [
        {
          value: '1000000000000000000',
          data: 'transaction-1',
          receiver:
            'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
          sender:
            'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex'
        },
        {
          value: '2000000000000000000',
          data: 'transaction-2',
          receiver:
            'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
          sender:
            'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex'
        }
      ]
    });
  };

  return <button onClick={onClick}>Send Transactions</button>;
};
