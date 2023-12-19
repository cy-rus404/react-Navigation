import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';

export default function useAuth() {
    const [user, setUSer] = useState(null);
   useEffect(()=>{
    const unsub = onAuthStateChanged(auth, user=>{
        console.log('got user: ', user)
        if(user){
            setUSer(user);
        }else{
            setUSer(null)
        }
    })
    return unsub;
   },[])
    return{user}
}