import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Signup = async (formData) => {
    const navigate = useNavigate();

    try {
        const response = await axios.post("/api/auth/signup", formData);

        if (response.status === 200) {
            navigate("/login");
        } else {
            Swal.fire({
                title: "Error",
                text: response.data.message || 'Registration failed!',
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: error.response?.data?.message || 'Registration failed',
            icon: "error",
            confirmButtonText: "OK"
        });
    }
};

const Login = async (formData) => {
    const navigate = useNavigate();

    try {
        const response = await axios.post("/api/auth/login", formData);

        if (response.status === 200) {
            // Set a cookie
            Cookies.set('notify_main_u_system_ser', response.data.data, { expires: 30 });
            var logged = true;
            localStorage.setItem("logged", logged);
            navigate("/dashboard"); // Redirect to the dashboard or desired page after login
        } else {
            Swal.fire({
                title: "Error",
                text: response.data.message || 'Login failed!',
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: error.response?.data?.message || 'Login failed',
            icon: "error",
            confirmButtonText: "OK"
        });
    }
};

const Forgotpassword = async (email) => {
    console.log("To be developed");
};

const Logout = () => {
    var logged = false;
    localStorage.setItem("logged", logged);
    Cookies.remove('notify_main_u_system_ser'); // Remove the cookie
};

export { Signup, Login, Logout, Forgotpassword };


//const hashedUserId = Cookies.get('userId');
// if (!hashedUserId) {
//     throw new Error('User ID cookie not found');
//   }
//   const response = await axios.post('/api/profile/id', { userId: hashedUserId });