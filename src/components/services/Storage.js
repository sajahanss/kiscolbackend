export const storeUserData = (data)=>{
    localStorage.setItem('idToken',data._id)
    localStorage.setItem('username',data.displayName)
    localStorage.setItem('email',data.email)
    
}

export const storeprofileData = (data)=>{
    localStorage.setItem('profile',data)  
}

export const getprofilepic = ()=>{

    return localStorage.getItem('profile');
}

export const getUserData = ()=>{

    return localStorage.getItem('idToken');
}

export const getUserName = ()=>{

    return localStorage.getItem('username');
}

export const getUseremail=()=>{
    return localStorage.getItem('email');
}

export const removeUserData = ()=>{
     localStorage.removeItem('idToken')
     localStorage.removeItem('username')
     localStorage.removeItem('email')
     localStorage.removeItem('profile')
}