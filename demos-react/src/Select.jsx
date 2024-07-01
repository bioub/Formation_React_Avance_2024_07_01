import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.css';

function Select({ items, value, onValueChange }) {
  const [showMenu, setShowMenu] = useState(false);
  const hostRef = useRef();

  useEffect(() => {
    function handleWindowClick(event) {
      if (!hostRef.current?.contains(event.target)) {
        setShowMenu(false);
      }
    }
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="Select"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className={styles.selected}>{value}</div>
      {showMenu && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div
              key={item}
              className={styles.item}
              onClick={() => onValueChange(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
