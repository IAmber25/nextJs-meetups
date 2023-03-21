import { useRouter } from "next/router";
import Card from "../ui/Card";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li>
      <Card>
        <div>
          <img src={props.image} alt={props.title} />
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">{props.title}</h3>
          <address className="font-light">{props.address}</address>
        </div>
        <div className="m-2 rounded-lg border border-black p-2 w-40 text-center">
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
