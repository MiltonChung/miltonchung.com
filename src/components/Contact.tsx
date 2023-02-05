import emailjs from '@emailjs/browser';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { LoadingIconTwo } from './LoadingIconTwo';
import { toast, ToastContainer } from 'react-toastify';
import { CopyIcon, ContactIllustration } from '../Icons';
import { useToggle } from '../hooks/useToggle';
import { Input } from './common/Input';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [copyStatus, toggleCopyStatus] = useToggle(false);
  const [loading, setLoading] = React.useState(false);
  const [formApiError, setFormApiError] = React.useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormValues>();

  React.useEffect(() => {
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
  }, []);

  const toastifySuccess = () => {
    toast('🚀 Form sent! Thank you!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data: ContactForm) => {
    try {
      setLoading(true);
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: 'Portfolio Contact Form',
        message: data.message
      };

      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.EMAILJS_PUBLIC_KEY
      );
      reset();
      toastifySuccess();
    } catch (error) {
      setFormApiError(error);
    }
    setLoading(false);
  };

  const copyText = () => {
    const email = 'miltonjchung@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => toggleCopyStatus(),
      err => {
        console.error('Async: Could not copy text: ', err);
      }
    );
  };

  return (
    <div className="custom-container contact-styles">
      <div className="section-title">
        <small>Let's talk!</small>
        <h2>Contact Me</h2>
        <div className="underline-section" />
      </div>

      <div className="contact-body">
        <div className="contact-body-left">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              name="name"
              label="Full Name"
              placeholder="Ecma Script"
              type="text"
              errors={errors}
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name'
                },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less'
                }
              })}
            />

            <Input
              name="email"
              label="Email Address"
              placeholder="ecmascript@example.com"
              type="email"
              errors={errors}
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
            />

            <Input
              name="message"
              label="Message"
              placeholder="ecmascript@example.com"
              type="text"
              errors={errors}
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
            />

            <textarea
              name="message"
              {...register('message', {
                required: true
              })}
              cols={30}
              rows={8}
              placeholder="Hello world!"
            />

            {/* <label>
              <p>Full Name:*</p>
              <input
                type="text"
                name="name"
                placeholder="Ecma Script"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter your name'
                  },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
              />
            </label>
            <small className="error-msg error">
              {errors.name && (
                <span className="errorMessage">{errors.name?.message.toString()}</span>
              )}
            </small>

            <label>
              <p>Your Email:*</p>
              <input
                type="email"
                name="email"
                {...register('email', {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                placeholder="ecmascript@example.com"
              />
            </label>
            <small className="error-msg error">
              {errors.email && (
                <span className="errorMessage">Please enter a valid email address</span>
              )}
            </small>

            <label>
              <p>Your message:*</p>
              <textarea
                name="message"
                {...register('message', {
                  required: true
                })}
                cols={30}
                rows={8}
                placeholder="Hello world!"></textarea>
            </label>
            <small className="error-msg error">
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </small> */}

            {loading ? (
              <button disabled id="contactButton">
                <LoadingIconTwo />
              </button>
            ) : (
              <button type="submit" id="contactButton">
                Send Message
              </button>
            )}
          </form>
          <ToastContainer />
          <h3>- OR -</h3>

          <div className="myEmail">
            <a href="mailto:hchung14@ucsc.edu" rel="noreferrer" className="tooltip">
              miltonjchung@gmail.com
              <span className="email-tooltip-text">Open Mail app</span>
            </a>
            <button onClick={copyText} className="tooltip" aria-label="copy email">
              <CopyIcon />
              <span className="tooltiptext" id="myTooltip">
                {copyStatus ? <>Copied to clipboard!</> : <>Copy to clipboard</>}
              </span>
            </button>
          </div>
        </div>
        <ContactIllustration />
      </div>
    </div>
  );
};

export { Contact };
