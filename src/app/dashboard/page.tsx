import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/SideBar'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Dashboard />
    </div>
}

export default page