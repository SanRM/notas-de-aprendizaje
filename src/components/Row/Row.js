export default function Row({children}) {
  return (
    <div style={{ display: 'flex', justifyContent: '-moz-initial', paddingBottom: '20px', paddingRight: '20px', gap: '10px' }}>
      {children}
    </div>
  );
}