'use client';
import { useEffect, useState } from 'react'

interface IClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly:React.FC<IClientOnlyProps> = ({
    children
}) => {
    const [hasMounted,setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    },[])
    return !hasMounted ? null : (
    <>{children}</>
  )
}

export default ClientOnly