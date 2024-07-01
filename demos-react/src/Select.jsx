import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './Select.module.css';

const Select = forwardRef(function Select(
  { items, value, onValueChange, renderItem },
  ref,
) {
  const [showMenu, setShowMenu] = useState(false);
  const hostRef = useRef();

  useImperativeHandle(ref, () => ({
    openMenu() {
      console.log('openMenu');
      setShowMenu(true);
    }
  }));

  useEffect(() => {
    function handleWindowClick(event) {
      if (!hostRef.current?.contains(event.target)) {
        setShowMenu(false);
      }
    }
    window.addEventListener('click', handleWindowClick, { capture: true });
    return () => {
      window.removeEventListener('click', handleWindowClick, { capture: true });
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
              {renderItem ? renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default Select;
