import React from "react";
import NewsletterForm from "./NewsletterForm";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter d-flex flex-column text-center py-5">
      <div className="newsletter__header pt-5">
        <h5>Connect to Basel & Co.</h5>
        <h1>Join Our Newsletter</h1>
        <p>
          Hey you, sign up it only takes a second to be the first to find out
          about our latest news and promotions…
        </p>
      </div>
      <div>
        <NewsletterForm />
      </div>
    </div>
  );
}

export default Newsletter;
