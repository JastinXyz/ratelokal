import classNames from 'classnames';
import React from 'react';

export default function Checkbox(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <input
      type="checkbox"
      {...props}
      className={classNames(
        'rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary-600 shadow-sm focus:ring-primary-500 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800',
        props.className,
      )}
    />
  );
}
