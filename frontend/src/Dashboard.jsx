import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
    const [suc, setSuc] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/auth/dashboard', { withCredentials: true })
            .then(res => {
                if (res.data.message === 'Success') {
                    setSuc("You verify You as an Admin");
                    setIsAdmin(true);
                } else {
                    setSuc("You are a user so you can only upload PDFs");
                    setIsAdmin(false);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [navigate]);

    const handleViewButtonClick = () => {
        navigate('/view');
    };

    const handleUploadButtonClick = () => {
        navigate('/upload');
    };

    return (
        <div>
            This is the dashboard
            {suc && <p>{suc}</p>}
            {isAdmin ? (
                <div>
                    <button onClick={handleViewButtonClick}>
                        Go to view
                    </button>
                    <button onClick={handleUploadButtonClick} style={{ marginLeft: '10px' }}>
                        Go to upload
                    </button>
                </div>
            ) : (
                <button onClick={handleUploadButtonClick}>
                    Go to upload
                </button>
            )}
        </div>
    );
};

export default MyComponent;
