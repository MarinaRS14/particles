import './Button.css';

type HandleClickType = {
  handleClick: () => void;
};

export const Button = (props: HandleClickType) => {
  const { handleClick } = props;

  return <button onClick={handleClick}>SHOW ME ICON</button>;
};
