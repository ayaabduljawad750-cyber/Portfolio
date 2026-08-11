import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import PackageLottie from "lottie-react";
import DoneAnimation from "../../animations/doneAnimation.json";
import EmailAnimation from "../../animations/emailAnimation.json";

const Lottie = PackageLottie.default;

export default function ContactUs() {
  const [state, handleSubmit, reset] = useForm("xeebjdje");
  const [formInputs, setFormInputs] = useState({ email: "", message: "" });

  function handleChangeInput(e) {
    const label = e.target.name;
    const value = e.target.value;
    let newForm = { ...formInputs };
    newForm[label] = value;
    setFormInputs(newForm);
  }

  function handleSubmitForm(e) {
    handleSubmit(e);
  }

  useEffect(() => {
    if (state.succeeded) {
      setFormInputs({ email: "", message: "" });
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state, reset]);

  return (
    <div className="contact-us">
      <div className="top">
        <h2 className="title">
          <i className="icon-envelope" />
          Contact Us
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis optio
          harum natus animi praesentium consectetur.
        </p>
      </div>
      {state.succeeded && (
        <div className="success-message">
          <div className="animation-success">
            <SuccessAnimation />
            <h2>Your message has been sent successfully.</h2>
          </div>

          <p>We'll contact you soon.</p>
        </div>
      )}

      <div className="bottom">
        <form action="" className="left" onSubmit={handleSubmitForm}>
          <div className="email-box">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formInputs.email}
              onChange={handleChangeInput}
              autoComplete="off"
            />
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="error-message"
          />
          <div className="message-box">
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              id="message"
              value={formInputs.message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="error-message"
          />
          <div className="send-box">
            <button
              className={`send ${formInputs.email === "" || formInputs.message === "" || state.submitting ? "disabled" : ""}`}
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        <div className="right animation ">
          <ContactUsAnimation />
        </div>
      </div>
    </div>
  );
}

function SuccessAnimation() {
  const lottieRef = useRef();
  return (
    <Lottie
      lottieRef={lottieRef}
      onLoadedImages={()=>{
        lottieRef.current.setSpeed(5)
      }}
      animationData={DoneAnimation}
      loop={false}
      style={{ width: 50 }}
    />
  );
}

function ContactUsAnimation() {
  return <Lottie animationData={EmailAnimation} style={{ width: "100%" }} />;
}
