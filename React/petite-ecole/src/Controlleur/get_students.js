import axios from "axios"

export async function getStudentsData() {
    try{
        const response = await axios.get("http://localhost:3001/students")
        const data = response.data
        return data
    }catch (error){
        console.log(error)
    }
}

