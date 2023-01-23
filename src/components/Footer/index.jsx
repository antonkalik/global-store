import { useSelector } from "../../store";

export const Footer = () => {
  console.log("Footer updated");
  const status = useSelector((state) => state.status);

  return (
    <div className="footer">
      <p>Footer</p>
      <p>Name: {status}</p>
    </div>
  );
};
