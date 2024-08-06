import { useEffect, useState } from "react"

const useCheckMeta = () => {
    const [status , setStatus] = useState<'notEntered' | 'pending' | 'success'>('pending');
    const [isLoading , setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function CheckStatus(){
            const getStatus = await fetch('' , {
                method : 'POST' ,
                body : JSON.stringify({email : ''}),
                headers : {'Content-Type': 'application/json'}
            });
            const Status = await getStatus.json();

            setStatus(Status);
            setIsLoading(false);
        }

        CheckStatus();
    }, []);
    
  return {status , isLoading};
}

export default useCheckMeta;