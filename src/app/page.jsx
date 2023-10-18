import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <h1>HOME</h1>
    <div>
      <ul>
        
        <Link href="/produtos/tenis">TÊNIS </Link>
        <Link href="/produtos/camiseta">CAMISETAS </Link>
        <Link href="/produtos/calcas">CALÇAS </Link>
      </ul>
      <figure>
        <Image src="/shoes.jpg" alt="tenis" width={320} height={320}/>
      </figure>
    </div>
    </>
  )
}