import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../context/store';
import { logout } from './lib/api';

function Logout() {
    const router = useRouter();

    const store = useContext(StoreContext)

    useEffect(() => {
        logout(router, store.setState);
    }, [])
  return (
    <div>Logging you out...</div>
  )
}

export default Logout