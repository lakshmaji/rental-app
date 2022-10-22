import { Fragment } from "react";
import rooms from "../../data/rooms";
import Room from "./Room";
import SectionTitle from "./SectionTitle";

const ExploreSection = () => {
  return (
    <section className="explore-container">
      <SectionTitle title="Explore" subtitle="From one-guest rooms to penthouses with pools and gardens" />
      <div className="row">
        {rooms.map((room) => (
          <Fragment key={room.id}>
            <Room room={room} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
