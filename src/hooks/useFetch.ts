const useFetch = () => {
    const GET = async (url: string, blob: boolean = false) => {
        const res = await fetch(url, {
            method: 'GET',
            credentials: 'include',
        });
        if (blob) return res.blob();
        const result = await res.json();
        return result;
    };

    const POST = async (url: string, body?: any, hasImageFile: boolean = false) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: !hasImageFile
                ? {
                      'Content-Type': 'application/json',
                  }
                : {},
            credentials: 'include',
            body: body ? (!hasImageFile ? JSON.stringify(body) : body) : null,
        });
        const result = await res.json();
        return result;
    };

    const PUT = async (url: string, body?: any) => {
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: body ? JSON.stringify(body) : null,
        });
        const result = await res.json();
        return result;
    };

    const DELETE = async (url: string, body?: any) => {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: body ? JSON.stringify(body) : null,
        });
        const result = await res.json();
        return result;
    };

    const PATCH = async (url: string, body?: any) => {
        const res = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: body ? JSON.stringify(body) : null,
        });
        const result = await res.json();
        return result;
    };

    return {
        GET,
        POST,
        PUT,
        DELETE,
        PATCH,
    };
};

export default useFetch;
