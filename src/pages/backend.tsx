import useFetch from '@/hooks/useFetch';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';

const Backend: NextPage = () => {
    const fetch = useFetch();
    const getSearchResultQuery = useQuery({
        queryKey: ['search'],
        queryFn: async () => {
            const response = await fetch.GET(`/api/login`);
            if (!response.success) {
                throw new Error(response.message);
            }
            console.log(response.data);
            return response.data;
        },
    });
    return (
        <div>
            <h1>backend</h1>
            <p>This is data {getSearchResultQuery.data?.[0]?.id ?? 'loading...'}</p>
        </div>
    );
};

export default Backend;
