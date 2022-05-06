import { useQuery } from "@apollo/client";
import { ALL_USERS, ALL_POSTS } from '../t-data/queries';

export function useGetUsers() {
    const result = useQuery(ALL_USERS);
    return result;
};

export function useGetAllPosts() {
    const result = useQuery(ALL_POSTS);
    return result;
}
