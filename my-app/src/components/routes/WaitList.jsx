import { Outlet } from "react-router";
import WaitListForm from "../pieces/WaitListForm.jsx";

export default function WaitList() {
  return (
    <div>
      <WaitListForm />
      <Outlet />
    </div>
  );
}
