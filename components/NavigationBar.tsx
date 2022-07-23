import Link from 'next/link'

export default function NavigationBar() {
  return (
    <div className='nav-bar'>  
        <h2 className='logo'><Link href='/'>Spectagram</Link></h2>
        <ul className='nav-list'>
            <li className='nav-items'><Link href='/SecondDisplay'>Desktop View 01</Link></li>
            <li className='nav-items'><Link href='/'>Desktop View 02</Link></li>
        </ul>
    </div>
  )
}
