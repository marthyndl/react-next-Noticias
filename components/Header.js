import Link from 'next/link';
import InputSearch from '../components/InputSearch';


const linkStyle = {
  marginRight: 15
};

const optionsCountry = [
{value: '1', name: 'Política'},
{value: '2', name: 'Internacionales'}, 
{value: '3', name: 'Tecnología'}, 
{value: '4', name: 'Espectáculos'},
{value: '5', name: 'Deportes'}];


const Header = () => (
  <div>
      <Link href="/">
        <a style={linkStyle} >Home</a>
      </Link>
      {optionsCountry.map(option => (   
      <Link key={option.value} href="/post/[category]" as={`/post/${option.value}`}>
        <a style={linkStyle} >{option.name}</a>
      </Link>
      ))}
      <InputSearch />
  </div>
);

export default Header;
