
import { useState } from "react";
import './styles.css';

const Form = ()=>{

  
    const [formData,setFormData]= useState({
        name:'',
        surname:'',
        phone:'',
        email:'',
        comment:''
    });
    
   
    const [container,setContainer] = useState(false)





    const onChange= (event)=>{
        const {name,value} = event.target
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const onSubmit=(event)=>{
        
        event.preventDefault();
        console.log('Xeste qeydiyyat', formData)
        alert('success registration',formData)
        setContainer(true);

    }

    const resetForm=()=>{
        setFormData({
            name:'',
            surname:'',
            phone:'',
            email:'',
            comment:''
        })
        setContainer(false)
    }

    return(
        <div className="header">
        {!container?(<form className="container" id="required" onSubmit={onSubmit}>
            <label name='name' >Ad:</label>
            <input name='name' required value={formData.name} onChange={onChange} />
            <label name='surname'>Soyad:</label>
            <input name='surname' required value={formData.surname} onChange={onChange}/>
            <label name='phone'>Telefon:</label>
            <input name='phone' required value={formData.phone} onChange={onChange}/>
            <label name='email'>E-mail:</label>
            <input name='email' required value={formData.email} onChange={onChange}/>
            <label name='comment'>Serh:</label>
            <textarea name='comment' required value={formData.comment} onChange={onChange}/>

            <button type="submit" >Gonder:</button>
        </form>)
        :(
            <div className="card">
          <h2>Məlumatlar:</h2>
          <p>
            <strong>Ad:</strong> {formData.name}
          </p>
          <p>
            <strong>Soyad:</strong> {formData.surname}
          </p>
         
          <p>
            <strong>Telefon:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          
          <p>
            <strong>Serh:</strong> {formData.comment}
          </p>
        
          <button className="btn-reset"  onClick={resetForm}>Yeni Qeydiyyat</button>
        </div>
        )}
        </div>
    )
}
export default Form