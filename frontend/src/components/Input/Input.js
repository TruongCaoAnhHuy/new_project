import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Input({ id, className, children, login, leftIcon, icon, placeholder, type, ...passProps }) {
    const [valueInput, setValueInput] = useState(type);

    const props = {
        id,
        placeholder,
        ...passProps,
    };

    const classes = cx('input', {
        [className]: className,
        login,
    });

    const changevalue = () => {
        if (valueInput === 'password') {
            setValueInput('text');
        } else {
            setValueInput('password');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <label className={cx('label')} htmlFor={id}>
                {children}
            </label>
            <input className={classes} {...props} type={valueInput} />
            {leftIcon && (
                <FontAwesomeIcon
                    onClick={changevalue}
                    className={cx('icon')}
                    icon={valueInput === 'password' ? faEye : faEyeSlash}
                />
            )}
        </div>
    );
}

export default Input;
