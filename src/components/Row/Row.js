export default function Row({children}) {
  return (
    <div style={{ display: 'flex', justifyContent: '-moz-initial', paddingBottom: '20px', paddingRight: '50px', gap: '25px' }}>
      {children}
    </div>
  );
}