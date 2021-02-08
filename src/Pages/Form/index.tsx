
import './../../../src/App.css';
import Button from '../../components/Button';
import './styles.css';
import { Link } from 'react-router-dom';
import './../../assets/image/image.png';

const Form = () => {
    return (
        <>
        
            <div className="form-content">
                <p className="form-title">
                    Encontre um perfil GitHub
                </p>
                <input className="input-field" type="text" />

                <div className="btn-form">
                    <Link to="/search">
                        <Button text="Encontrar" />
                    </Link>
                </div>
            </div>

            <div className="second-form">
               <div className="left-content">
                   <div className="image-div">
                <img src="" alt="PHOTO"  />
                </div>
                <div className="btn-perfil-form">
                    <Link to="/search">
                        <Button text="Ver Perfil" />
                    </Link>
                    </div>
                    </div>
                <div className="right-content">
                    <div className="form-seguidores-info">
                    <input placeholder="Repositório Público:" type="text" className="form-repo" />
                    <input placeholder="Seguidores:" type="text" className="form-seguidores" />
                    <input placeholder="Seguindo:" type="text" className="form-seguindo" />
                    </div>
                <div className="information-form">
                    <p className="label-field">Information</p>
                    <div>
                        <input placeholder="Empresa" type="text" className="inputs-form" />
                        </div>
                        <div>
                        <input placeholder="Website/Blog" type="text" className="inputs-form" />
                        </div> 
                        <div>
                        <input placeholder="Localidade" type="text" className="inputs-form" />
                        </div> 
                        <div>
                        <input placeholder="Membro desde:" type="text" className="inputs-form" />
                        </div>
                        </div>
                    </div>
                </div>
                
           </>
    )
}

export default Form;