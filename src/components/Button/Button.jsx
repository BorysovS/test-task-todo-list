import styles from './Button.module.css';

export const Button = ({
  selected = 'status',
  children,
  onPress,
  onDatePress,
}) => {
  const handleClick = () => {
    if (selected === 'status') {
      onPress();
      return;
    } else if (selected === 'date') {
      onDatePress();
      return;
    }
    return;
  };
  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={styles.filter_btn}
    >
      {children}
    </button>
  );
};
