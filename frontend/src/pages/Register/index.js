import classNames from 'classnames/bind';
import ReactLoading from 'react-loading';

import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './Register.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '~/components/Modal';
const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        pass: '',
    });

    const [errorMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.userName === '' || formData.pass === '') {
            setErrMsg('Please fill all fields');
        } else {
            setLoading(true);
            await fetch('http://localhost/test_php_react/backend/controllers/RegisterController.php', {
                method: 'post',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then(console.log);
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <form onSubmit={handleSubmit} className={cx('form')}>
                    <h2 className={cx('title')}>Register</h2>
                    <p className={cx('error-msg')}>{errorMsg}</p>
                    <Input
                        className={cx('input')}
                        login
                        id="name"
                        placeholder="User Name"
                        name="userName"
                        onChange={handleChange}
                    >
                        User Name
                    </Input>
                    <Input
                        className={cx('input')}
                        login
                        leftIcon
                        type="password"
                        id="pass"
                        placeholder="Password"
                        name="pass"
                        onChange={handleChange}
                    >
                        Password
                    </Input>
                    <Input
                        className={cx('input')}
                        login
                        leftIcon
                        type="password"
                        id="cf_pass"
                        placeholder="Password"
                        name="cf_pass"
                        onChange={handleChange}
                    >
                        Confirm Password
                    </Input>
                    <Button className={cx('btn')} primary type="sunmit">
                        Register
                    </Button>
                </form>
            </div>
            {loading ? (
                <Modal>
                    <ReactLoading type={'bars'} color="#96d9ec" height={100} width={100} />
                </Modal>
            ) : (
                <></>
            )}
        </>
    );
}

export default Register;
