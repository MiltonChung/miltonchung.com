import * as React from 'react';
import { Input } from './common/Input';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Textarea } from './common/Textarea';
import { LoadingIconTwo } from './LoadingIconTwo';
import { toast, ToastContainer } from 'react-toastify';
import { ContactIllustration } from '../Icons';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset: resetForm
  } = useForm<FormValues>();

  React.useEffect(() => {
    window.onRecaptchaVerify = () => {
      setIsRecaptchaVerified(true);
    };
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
      setIsRecaptchaVerified(false);
      setIsSubmitted(true);
      toggleSuccessToast();
    } catch (e) {
      toast.error(`Sorry, something went wrong. Try again or email me directly!`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'toastify-custom error-toast'
      });
      console.error('EmailJS Error:', e);
    } finally {
      setIsLoading(false);
    }
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
          {isSubmitted ? (
            <div className="contact-thankyou">
              <h3>Thank you for reaching out!</h3>
              <p>I'll get back to you soon.</p>
            </div>
          ) : (
            <form aria-label="contact me" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                name="name"
                label="Your Name"
                placeholder="Ecma Script"
                type="text"
                errors={errors}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter your name'
                  },
                  maxLength: {
                    value: 60,
                    message: 'Please use 60 characters or less'
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
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
              <div
                className="g-recaptcha"
                data-sitekey="6Lc7TU4sAAAAAO9avkZLh2Vn5uf3oe5PNgE1NDQj"
                data-callback="onRecaptchaVerify"
              />
              {isLoading ? (
                <button disabled id="contactButton">
                  <LoadingIconTwo />
                </button>
              ) : (
                <button type="submit" id="contactButton" disabled={!isRecaptchaVerified}>
                  Send Message
                </button>
              )}
            </form>
          )}
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
