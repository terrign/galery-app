import styles from './styles.module.css';

import { HEADER_LINKS } from '@/components/header/links';
import { NavLink } from '@/components/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        {HEADER_LINKS.map(({ name, href, icon }) => (
          <li key={name}>
            <NavLink href={href} icon={icon}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export { Header };
