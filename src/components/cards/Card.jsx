import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  return (
    <NavLink
      to={`/photographies/${props.id}`}
      className="card_bg flex itementer flex-col rounded-lg overflow-hidden p-4 w-full h-full"
    >
      <div className="w-full h-96 mb-2">
        <img
          src={props.img}
          alt="popular places"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="">
        <p className="text-lg !text-right whitespace-pre-line leading-relaxed ">
          {props.caption}
        </p>
        <p className="text-lg text-right">{props.date}</p>
      </div>
    </NavLink>
  );
}
