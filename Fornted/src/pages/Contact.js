import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Thank you for your interest in stocks! Whether you have questions, feedback, or inquiries,
        we'd love to hear from you. Please feel free to reach out to us through the following contact information:
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Customer Support</h2>
        <p>Email: support@stockexchange.com</p>
        <p>Phone: +91 9908088881</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Stock Investing Inquiries</h2>
        <p>Email: inquiries@stockexchange.com</p>
        <p>Phone: +91 85529881789</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Visit Our Office</h2>
        <p>
          Stocks Exchange Management HQ<br />
          K L UNIVERSITY ,<br />
          GreenFeilds ,Guntur.
        </p>
      </div>
      <p className="mb-4">
        Our dedicated team is here to assist you. Whether you need help with product information, order assistance,
        or have general inquiries, we are committed to providing prompt and helpful support.
      </p>
      {/* Add social media icons/links here if applicable */}
    </div>
  );
}

export default Contact;
