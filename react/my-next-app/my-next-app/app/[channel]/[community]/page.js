const d = ({ params }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '10vh',
        background:'yellow'
      }}
    >
      <h1
        style={{
          color: '#3b82f6',
          fontSize: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        my channel {params.channel}
      </h1>
      <h1
        style={{
          color: '#10b981',
          fontSize: '2rem',
        }}
      >
        hey {params.community}
      </h1>
    </div>
  );
};

export default d;