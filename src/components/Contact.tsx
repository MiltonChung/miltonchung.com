import * as React from 'react';
import { Input } from './common/Input';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Textarea } from './common/Textarea';
import { LoadingIconTwo } from './LoadingIconTwo';
import { toast, ToastContainer } from 'react-toastify';
import { ContactIllustration, CopyIcon } from '../Icons';

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
  const [copyStatus, setCopyStatus] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset: resetForm
  } = useForm<FormValues>();

  React.useEffect(() => {
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
  }, []);

  const onSubmit = async (data: ContactForm) => {
    try {
      setIsLoading(true);
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
      resetForm();
      toggleSuccessToast();
    } catch {
      toast.error(`Sorry, something went wrong. Try again or email me directly!`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'toastify-custom error-toast'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyText = () => {
    const email = 'miltonjchung@gmail.com';

    navigator.clipboard.writeText(email).then(
      () => {
        setCopyStatus(true);
        setTimeout(() => {
          setCopyStatus(false);
        }, 3000);
      },
      () => {
        toast.error(`Sorry, could not copy email. Try again or use the contact form.`, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'toastify-custom error-toast'
        });
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
          <form aria-label="contact me" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  value: 50,
                  message: 'Please use 50 characters or less'
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
                required: {
                  value: true,
                  message: 'Please enter your email address'
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a valid email address'
                }
              })}
            />

            <Textarea
              name="message"
              label="Message"
              placeholder="Hello world!"
              errors={errors}
              cols={30}
              rows={8}
              {...register('message', {
                required: {
                  value: true,
                  message: 'Please enter a message'
                }
              })}
            />

            {isLoading ? (
              <button disabled id="contactButton">
                <LoadingIconTwo />
              </button>
            ) : (
              <button type="submit" id="contactButton">
                Send Message
              </button>
            )}
          </form>

          <h3 className="contact-divider">- OR -</h3>

          <div className="contact-my-email">
            <a
              href="mailto:miltonjchung@gmail.com"
              rel="noreferrer"
              className="tooltip-container">
              miltonjchung@gmail.com
              <span className="tooltip-popup">Open Mail app</span>
            </a>

            <button
              onClick={copyText}
              type="button"
              className="tooltip-container copy-button"
              aria-label="copy email">
              <CopyIcon />
              <span className="tooltip-popup">{copyStatus ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <div className="contact-body-right">
          <ContactIllustration className="contact-illustration" />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

const toggleSuccessToast = () => {
  toast('🚀 Form sent! Thank you!', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'toastify-custom submit-form-success',
    toastId: 'notifyToast'
  });
};

export { Contact };
