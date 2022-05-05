import { useQuery } from "@apollo/client";
import { ALL_USERS } from '../t-data/queries';

export function useGetUsers() {
    const result = useQuery(ALL_USERS);

    return result;
}
