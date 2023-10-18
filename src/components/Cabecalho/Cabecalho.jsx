import Link from "next/link"
export default function Cabecalho(){
    return(
        <header>
            <nav
            ><ul>
                <Link href="/produtos/tenis">TÊNIS </Link>
                <Link href="/produtos/camiseta">CAMISETAS </Link>
                <Link href="/produtos/calcas">CALÇAS </Link>
            </ul>
            </nav>
        </header>
        
    )
}

