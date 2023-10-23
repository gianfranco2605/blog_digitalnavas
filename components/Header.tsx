import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between">
       <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-3">
              <Logo />
            </div>
            {siteMetadata.headerTitle}
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 mr-36">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-gray-300 text-gray-900 dark:text-gray-100 transition duration-300"
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <div className="flex items-center space-x-4">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
