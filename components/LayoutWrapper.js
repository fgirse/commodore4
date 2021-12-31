/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Phoneillustra from '../components/icons/svg/phoneillustra.js'
import LogoNeu from './icons/svg/SvgLogoNeu'
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between minh-screen bg-gray-800">
        <header className="flex items-center justify-between py-8">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex flex-row justify around gap-10 items-center">
                  <LogoNeu />
                  <Phoneillustra />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-sm text-gray-400 font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-bold font-sans text-gray-200 hover:text-yellow-400 hover:border-b hover: border-yellow-400 sm:p-4  lg:text-2xl dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
export default LayoutWrapper