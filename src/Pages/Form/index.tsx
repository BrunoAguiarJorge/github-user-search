
import './../../../src/App.css';
import Button from '../../components/Button';
import './styles.css';


const Form = () => {
    return (

        <div className="form-content">
             <p className="form-title">
                 Encontre um perfil GitHub
             </p> 
          <input className="input-field" type="text"/>
         
         <div className="btn-form">
          <Button  />
          </div>
        </div>


    );
}

export default Form;