
export default function CalcaLayout({ children }) {
  return (
    <div>
      <h1>Minhas Calças</h1>
      <ul>
        <li><Link href="/produtos/tenis">TÊNIS </Link></li>
        <li><Link href="/produtos/camiseta">CAMISETAS </Link></li>
        <li><Link href="/produtos/calcas">CALÇAS </Link></li>
      </ul>
      {children}
    </div>
  )
}
