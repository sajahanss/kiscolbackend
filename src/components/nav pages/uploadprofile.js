import { useEffect, useState } from 'react'
import avatar from '../assets/profile.png'
import axios from 'axios';
import './upload.css';
import { getUserData,storeprofileData,getprofilepic} from '../services/Storage';

const url = "https://kiscol-backend.onrender.com/uploads"

function UploadedDP() {
  
  const [postImage, setPostImage] = useState( {userprofileid: "", myFile : ""})
  const [profuloadbtn,setprofuploadbtn]=useState(false)


 
     
 
  const createPost = async (newImage) => {
    try{
        
      await axios.post(url,newImage)
      .then((data)=>{
        alert('Profile Picture updated')
        storeprofileData(data.data.myFile)
        setprofuploadbtn(false)
        console.log(data.data.myFile);
      })
      
    }catch(error){
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage)
    
  }

  const userpid=getUserData();
  const profilepic=getprofilepic();

useEffect(()=>{
 
  setPostImage({userprofileid:userpid, myFile:profilepic})
},[])


  const handleFileUpload = async (e) => {
    setprofuploadbtn(true)
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage,userprofileid : userpid , myFile : base64 })
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile || avatar} alt="" style={{borderRadius:'50%',height:'100px',width:'100px'}} />
        </label>
        <h1>Chenge Profile Picture</h1>
        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
         {profuloadbtn && <button type='submit' className='btn btn-dark'>Submit</button>}
      </form>
    </div>
  )
}

export default UploadedDP


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}