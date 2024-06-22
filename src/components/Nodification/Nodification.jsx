import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Nodification() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}></button>
      <ToastContainer />
    </div>
  );
}
