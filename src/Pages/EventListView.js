import "../App.css";
import { Header } from "../components/Header";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet-async";

function EventListView() {
  return (
    <>
      <Helmet>
        <title>AI Community directory</title>
        <meta
          name="description"
          content="Find an active directory and participate as a judge, attendee or even a host. All our events are different."
          title="directory List"
        />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <Header />
        <CardList />
      </div>
    </>
  );
}

export default EventListView;
