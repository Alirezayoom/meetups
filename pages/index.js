import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from api or fs

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from api or fs
  const client = await MongoClient.connect(
    "mongodb+srv://ali:ali@cluster0.qafjedp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetupsCollection");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // revalidate: 1,
  };
}

export default HomePage;
