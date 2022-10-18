import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function addMeetupHandler(enteredMeetupData) {
  console.log(enteredMeetupData);
}

function NewMeetupPage() {
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
