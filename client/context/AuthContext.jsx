import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import {io} from "socket.io-client"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;


export  const AuthContext = createContext();

export const AuthProvider = ({ Children})=>{

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [authUser, setAuthUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);

    const checkAuth = async () => {
        try{
           const { data } = await axios.get("/api/auth/check");
           if (data.success) {
            setAuthUser(data.user)
            connectSocket(data.user)
           }

        }catch (error) {
            toast.error(error.message)

        }
    }

    const login = async (state, Credential)=>{
        try {
             const { data } = await axios.post(`/api/auth/${state}`, Credentials);
             if (data.success){
                setAuthUser(data.userData);
                connectSocket(data.userData);
                axios.defaults.headers.common["token"] = data.token;
                setToken(data.token);
                localStorage.setItem("token", data.token)
                toast.success(data.message)
             } else{
                toast.error(data.message)
             }
        } catch (error) {
            toast.error(error.message)

        }
    }

    // logout function to handle user logout and socket disconnected

    const logout = async () =>{
        localStorage.removeItem("token");
        setToken(null);
        setAuthUser(null);
        setOnlineUsers([]);
        axios.defaults.headers.common["token"]= null;
        toast.success("Logged out succecssfully")
        socket.disconnect();
    }

    // update profile function to handle user profile updates

    const updateProfile = async (body)=>{
        try{
            const { data } = await axios.put("/api/auth/update-profile", body);
            if(data.success){
                setAuthUser(data.user);
                toast.success("Profile upadted successfully")
            }
        }catch (error){
            toast.error(error.message)
        }
    }


    // connect socket functions to handle socket connections and online users updates
    const connectSocket = (userData)=>{
        if(!userData || socket?.connected) return;
        const newSocket = io(backendUrl, {
            query: {
                userId: userData._id,
            }
        });
        newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (userIds)=>{
            setOnlineUsers(userIds);
        })
    }

    useEffect(()=>{
        if(token){
            axios.defaults.headers.common["token"] = token;
        }
        checkAuth();
    },[])

    const value =  {
       axios,
       authUser,
       onlineUsers,
       socket,
       login,
       updateProfile
    }

    return (
        <AuthContext.Provider value={value}>
        {Children}
        </AuthContext.Provider>
    )
}