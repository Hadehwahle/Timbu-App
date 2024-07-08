import { useNavigate } from "react-router-dom";
function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order comfirmed!</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default Order;
