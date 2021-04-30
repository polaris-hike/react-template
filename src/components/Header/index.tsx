import { useFormatMessage } from '../hooks';

function Header() {
  const f = useFormatMessage();

  return <div>{f('hello')}</div>;
}
export default Header;
