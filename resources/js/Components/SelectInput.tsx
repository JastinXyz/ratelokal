import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: string[] | { value: any, label: string }[];
    optionsPlaceholder?: boolean;
    optionsPlaceholderText?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>((props, ref) => (
    <select
        {...props}
        ref={ref}
        className={classNames(
            'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm',
            props.className
        )}
    >
        {props.children ? props.children : <>
            {props.optionsPlaceholder ? <option selected disabled>{props.optionsPlaceholderText || 'Silahkan pilih'}</option> : ''}
            {props.options?.map((x, idx) => (
                typeof x === 'object' ?
                    <option key={idx} value={x.value}>
                        {x.label}
                    </option> :
                    <option key={idx} value={x}>
                        {x}
                    </option>
            ))}
        </>}
    </select>
));

export default SelectInput;