import { HEADER_LINKS } from '@/components/header/links';
import { NavLink } from '@/components/navLink';
import styles from './styles.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        {HEADER_LINKS.map(({ name, href, icon }, i) => (
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
