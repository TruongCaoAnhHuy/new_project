import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}></div>
            <div className={cx('loading')}>{children}</div>
        </div>
    );
}

export default Modal;
