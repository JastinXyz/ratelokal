import classNames from 'classnames';
import React, { forwardRef } from 'react';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
>((props, ref) => (
  <textarea
    {...props}
    ref={ref}
    className={classNames(
      'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm',
      props.className,
    )}
  ></textarea>
));

export default TextArea;