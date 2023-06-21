/** @jsxImportSource @emotion/react */

import { IMAGES } from 'constants/image';
import { contactStyle } from './ContactStyle';
import { EMAIL } from 'constants/common';
import { FindWithMe } from 'components/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormValues {
  name: string;
  phone?: string;
  email: string;
  subject?: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  phone: yup.string(),
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email must be a valid email'),
  subject: yup.string(),
  message: yup.string().required('Message is a required field')
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>({
    resolver: yupResolver<IFormValues>(schema)
  });
  const onSubmit = async (formValues: IFormValues) => {
    console.log(formValues);
  };

  return (
    <div css={contactStyle.self}>
      <h1 css={contactStyle.title}>Contact</h1>
      <div css={contactStyle.container}>
        <div css={contactStyle.left}>
          {/* <img src={IMAGES.PICTURE_PROFILE} alt='profile' /> */}
          <img
            src='https://a.cdn-hotels.com/gdcs/production154/d1245/0a3c326f-cedf-4cf9-ada2-71f7517d0a09.jpg'
            alt='profile'
          />
          <h2 css={contactStyle.name}>Pham Van Dat</h2>
          <span css={contactStyle.position}>Developer</span>
          <p css={contactStyle.infoDescription}>
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <span css={contactStyle.email}>
            Email: <a href={`mailto:{EMAIL}`}>{EMAIL}</a>
          </span>
          <FindWithMe />
        </div>
        <form css={contactStyle.right} onSubmit={handleSubmit(onSubmit)}>
          <div css={[contactStyle.groupTwoField]}>
            <div>
              <label css={contactStyle.customLabel} htmlFor='name'>
                YOUR NAME
              </label>
              <input
                css={[
                  contactStyle.customInput,
                  errors?.name ? contactStyle.inputError : null
                ]}
                id='name'
                type='text'
                {...register('name')}
              />
              {errors?.name ? (
                <p css={contactStyle.textError}>{errors.name.message}</p>
              ) : null}
            </div>
            <div>
              <label css={contactStyle.customLabel} htmlFor='phone'>
                PHONE NUMBER
              </label>
              <input
                css={contactStyle.customInput}
                type='tel'
                id='phone'
                {...register('phone')}
              />
            </div>
          </div>

          <div css={contactStyle.formGroup}>
            <label css={contactStyle.customLabel} htmlFor='email'>
              EMAIL
            </label>
            <input
              css={[
                contactStyle.customInput,
                errors?.email ? contactStyle.inputError : null
              ]}
              type='text'
              id='email'
              {...register('email')}
            />
            {errors?.email ? (
              <p css={contactStyle.textError}>{errors.email.message}</p>
            ) : null}
          </div>

          <div css={contactStyle.formGroup}>
            <label css={contactStyle.customLabel} htmlFor='subject'>
              SUBJECT
            </label>
            <input
              css={contactStyle.customInput}
              type='text'
              id='subject'
              {...register('subject')}
            />
          </div>

          <div css={contactStyle.formGroup}>
            <label css={contactStyle.customLabel} htmlFor='message'>
              YOUR MESSAGE
            </label>
            <textarea
              rows={6}
              css={[
                contactStyle.customInput,
                errors?.email ? contactStyle.inputError : null
              ]}
              id='message'
              {...register('message')}
            />
            {errors?.message ? (
              <p css={contactStyle.textError}>{errors.message.message}</p>
            ) : null}
          </div>
          <button type='submit' css={contactStyle.customButton}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
