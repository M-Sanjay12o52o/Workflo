"use client";

import Taskmodal from '@/components/Taskmodal'
import { useRouter } from 'next/navigation';
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    const router = useRouter();

    const handleClose = () => {
        router.back()
    }

    return <div>
        <Taskmodal onClose={handleClose} />
    </div>
}

export default page