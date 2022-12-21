import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthApi from '../../api/authApi';
import useUserStore from '../../store/userStore';

export const useLogin = () => {
    const { setUser } = useUserStore();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';
    const { login } = useAuthApi();

    return useMutation(login, {
        onSuccess: (data) => {
            if (data) {
                toast.success(data.message);
                setUser(data);
                navigate(from, { replace: true });
            }
        },
        onError: (error) => {
            toast.error(error.response.data.message);
        },
    });
};
