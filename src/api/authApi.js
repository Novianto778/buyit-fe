import { toast } from 'react-hot-toast';
import useAxiosPrivate from '../common/hooks/useAxiosPrivate';

const useAuthApi = () => {
    const axiosPrivate = useAxiosPrivate();
    const login = async ({ username, password }) => {
        // using fetch
        // const response = await fetch('http://localhost:3500/auth', {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username, password }),
        // });

        // const data = await response.json();
        // return data;

        try {
            const { data } = await axiosPrivate.post(
                '/auth',
                {
                    username,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            return data;
        } catch (error) {
            toast.error(error.response?.data.message);
            return null;
        }
    };

    return { login };
};

export default useAuthApi;
