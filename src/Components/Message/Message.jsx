import "./message.css";

const Message = ({ msg, type = "success" }) => {
  return <div className={`message ${type}`}>{msg}</div>;
};

export default Message;
