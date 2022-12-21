import useAxiosPrivate from '../common/hooks/useAxiosPrivate';

const useUserApi = () => {
    const axiosPrivate = useAxiosPrivate();

    const getUser = async () => {
        try {
            const { data } = await axiosPrivate.get('/users', {
                withCredentials: true,
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return { getUser };
};

export default useUserApi;
