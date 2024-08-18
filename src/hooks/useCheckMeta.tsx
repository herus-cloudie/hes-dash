import { useSession } from "next-auth/react";
import { useEffect, useState } from "react"

const useCheckMeta = () => {
    const [status , setStatus] = useState<'notEntered' | 'pending' | 'success' | 'failure' | 'loading'>('loading');

    const session = useSession();
    const email = session.data?.user?.email as string;

    useEffect(() => {
        async function CheckStatus(){
            await fetch('https://hesnical.com/fetch/cred/data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({email})
            }).then(response => response.json())
            .then(({status}) => {
                setStatus('notEntered');
            }).catch(error => console.error('Error:', error))
        }

        CheckStatus();
    }, []);
    
  return {status};
}

export default useCheckMeta;