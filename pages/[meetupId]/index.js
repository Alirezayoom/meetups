import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Colosseo_2008.jpg/200px-Colosseo_2008.jpg"
        title="first meetup"
        address="some where 5, some"
        description="this is desc"
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Colosseo_2008.jpg/200px-Colosseo_2008.jpg",
        title: "first meetup",
        address: "some where 5, some",
        description: "this is desc",
      },
    },
  };
}

export default MeetupDetails;
