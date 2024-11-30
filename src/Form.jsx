
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
    
   
    
    const [errors, setErrors] = useState({});

    const [container,setContainer] = useState(false)
    const validateForm = () => {
      const newErrors = {};
      const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!formData.name.trim()) newErrors.name = "Ad daxil edilməlidir.";
      if (!formData.surname.trim()) newErrors.surname = "Soyad daxil edilməlidir.";
      if (!formData.phone.trim() || !phoneRegex.test(formData.phone))
        newErrors.phone = "Telefon nömrəsi düzgün formatda olmalıdır (10 rəqəm).";
      if (!formData.email.trim() || !emailRegex.test(formData.email))
        newErrors.email = "Email düzgün formatda olmalıdır.";
      if (!formData.comment.trim()) newErrors.comment = "Şərh daxil edilməlidir.";
  
      return newErrors;
    };

    const onChange= (event)=>{
        const {name,value} = event.target
        setFormData({
            ...formData,
            [name]:value,
        })
        setErrors({
          ...errors,
          [name]: "",
        });
    }

    
    const onSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        console.log("Form məlumatları:", formData);
        alert("Form uğurla göndərildi!");
        setContainer(true);
      }
    };

    const resetForm=()=>{
        setFormData({
            name:'',
            surname:'',
            phone:'',
            email:'',
            comment:''
        })
        setContainer(false)
        setErrors({})
    }

    return(
        <div className="header">
        {!container?(<form className="container" id="required" onSubmit={onSubmit}>
            <label name='name' >Ad:</label>
            <input name='name' required value={formData.name} onChange={onChange}  className={errors.name ? "error-input" : ""} />
            {errors.name && <p className="error-message">{errors.name}</p>}
            <label name='surname'>Soyad:</label>
            <input name='surname' required value={formData.surname} onChange={onChange} className={errors.surname ? "error-input" : ""}/>
            {errors.surname && <p className="error-message">{errors.surname}</p>}
            <label name='phone'>Telefon:</label>
            <input name='phone' required value={formData.phone} onChange={onChange}  className={errors.phone ? "error-input" : ""}/>
            {errors.phone && <p className="error-message">{errors.phone}</p>}
            <label name='email'>E-mail:</label>
            <input name='email' required value={formData.email} onChange={onChange}  className={errors.email ? "error-input" : ""}/>
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label name='comment'>Serh:</label>
            <textarea name='comment' required value={formData.comment} onChange={onChange} className={errors.comment ? "error-input" : ""}/>
            {errors.comment && <p className="error-message">{errors.comment}</p>}

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