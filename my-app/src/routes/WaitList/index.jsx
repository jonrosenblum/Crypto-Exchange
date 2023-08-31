import Form from "./components/Form";

export default function WaitList() {
  return (
    <div className="container pt-60 pb-48 ">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-5 font-bold leading-tight text-dark sm:text-[42px] lg:text-[52px] xl:text-[62px]">
            Join Our Waitlist
          </h1>
          <p className="mb-10 mx-auto max-w-[500px] text-base text-body-color text-center">
            Be the first to get access to our amazing crypto exchange platform!
            Sign up now to secure your spot on our waitlist and receive exciting
            updates and early access privileges.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
