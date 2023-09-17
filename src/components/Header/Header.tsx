import LanguageSelect from '../LanguageSelect';
import Navbar from '../Navbar/Navbar';
import Logo from './Logo';

function Header() {
  return (
    <div className='flex justify-between items-center h-20'>
      <Logo />
      <Navbar />
      <LanguageSelect />
    </div>
  );
}

export default Header;
