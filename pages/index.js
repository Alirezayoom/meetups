import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lincoln_Memorial_%28May_2014%29_crop.jpg/200px-Lincoln_Memorial_%28May_2014%29_crop.jpg",
    address: "somewhere, 123, some city",
    description: "this is first meetup",
  },

  {
    id: "m2",
    title: "second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Colosseo_2008.jpg/200px-Colosseo_2008.jpg",
    address: "somewhere, 123, some city",
    description: "this is second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
