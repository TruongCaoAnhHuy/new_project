import classNames from 'classnames/bind';
import ReactLoading from 'react-loading';

import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './Login.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '~/components/Modal';
const cx = classNames.bind(styles);

function Login() {
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

        setLoading(true);
        await fetch('http://localhost/test_php_react/backend/controllers/LoginController.php', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(async (response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    const data = await response.json();

                    if (data.status === 'success') {
                        setLoading(false);
                        navigate('/');
                        sessionStorage.setItem('userName', JSON.stringify(data.name));
                        setErrMsg('');
                    } else {
                        setLoading(false);
                        setErrMsg(data.message);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setErrMsg('Unable to connect to the server. Please try again.');
                setLoading(false);
            });
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <form onSubmit={handleSubmit} className={cx('form')}>
                    <h2 className={cx('title')}>Login</h2>
                    <p className={cx('error-msg')}>{errorMsg}</p>
                    <Input
                        className={cx('input')}
                        login
                        id="name"
                        placeholder="User Name"
                        name="userName"
                        required
                        onChange={handleChange}
                    >
                        User Name
                    </Input>
                    <Input
                        className={cx('input')}
                        login
                        leftIcon
                        id="pass"
                        placeholder="Password"
                        name="pass"
                        type="password"
                        required
                        onChange={handleChange}
                    >
                        Password
                    </Input>
                    <Button className={cx('btn')} primary type="sunmit">
                        Đăng nhập
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

export default Login;
