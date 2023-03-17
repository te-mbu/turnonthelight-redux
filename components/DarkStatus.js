import { useSelector } from "react-redux";

function DarkStatus() {
  const status = useSelector(states => states.dark.value)
  let message;
  let messageStyle = {}
  if (status) {
    message = "On"
    messageStyle = {"color": "black"}
  } else {
    message = "Off"
    messageStyle = {"color": "white"}
  }
  return (
    <div>
      <p style={messageStyle}>Light is {message}</p>
    </div>
  );
}

export default DarkStatus;
