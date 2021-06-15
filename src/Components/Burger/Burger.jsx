import "./burger.css";

const Burger = () => {
  const handleClick = (e) => {
    const element = e.currentTarget;
    element.classList.toggle("open");
  };
  return (
    <button onClick={handleClick} className="burger-menu-button">
      <div className="bar-top"></div>
      <div className="bar-mid"></div>
      <div className="bar-bottom"></div>
    </button>
  );
};

export default Burger;
