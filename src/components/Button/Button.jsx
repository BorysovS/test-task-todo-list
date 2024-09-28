export const Button = ({ selected, children, onPress, ...otherProps }) => {
    return (
      <button type="button" onClick={() => onPress()}>
        {children}
      </button>
    );
  };