import { useQuery } from '@tanstack/react-query';
import useUserApi from '../../api/userApi';

const queryKeys = {
    all: ['user'],
};

export const useUsers = () => {
    const { getUser } = useUserApi();
    return useQuery(queryKeys.all, getUser);
};
