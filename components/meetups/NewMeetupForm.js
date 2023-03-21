import { useRef } from "react";

import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 border border-indigo-400 rounded-lg p-5 shadow-2xl w-5/6 md:w-9/12 lg:w-6/12"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className="rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            className="rounded-lg p-2"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="border border-black rounded-lg text-center py-1 px-2">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
