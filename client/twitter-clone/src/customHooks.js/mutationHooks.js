import { CREATE_USER } from '../t-data/mutations';
import { useMutation } from '@apollo/client';
import { ALL_USERS } from '../t-data/queries';
import { LOGIN_USER } from '../t-data/mutations';
import { VERIFY_TOKEN } from '../t-data/mutations';

export function useCreateUser() {
    const result = useMutation(CREATE_USER, { refetchQueries: [{query: ALL_USERS }]}); 
    return result;
}

export function useLoginUser() {
    const result = useMutation(LOGIN_USER);
    return result;
}

export function useVerifyToken() {
    const result = useMutation(VERIFY_TOKEN);
    return result;
}