import { useEffect, useState } from 'react';
import primeiraIlustracao from '../../images/ilustra-01.svg';
import segundaIlustracao from '../../images/ilustra-02.svg';
import estadosJson from '../../api/estados.json';
import { Estado } from '../../interfaces/PostsBlog';

const Header = () => {
  const [nameCity, setNameCity] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [estados, setEstados] = useState<Estado[]>([]);

  useEffect(() => {
    setEstados(estadosJson.UF);
  }, []);

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">

          <img className="primeiraIlustracao" src={primeiraIlustracao} alt="Primeira ilustração a esquerda" />
          <img className="segundaIlustracao" src={segundaIlustracao} alt="Segunda ilustração a direita"/>

          <div className="findYourBlock">
            <p>find your block</p>
          </div>

          <div className="encontreOsMelhores text-center">
            <h3>Encontre os <span>melhores blocos</span> de carnaval de 2023</h3>
          </div>

          <div className="selectNameAndCity">
            <div className="form-group">
              <input 
                className="form-control" 
                value={nameCity}
                onChange={(e) => setNameCity(e.target.value)}
                name="" 
                id="" 
                type="text" 
                placeholder="Pesquise por nome" 
              />
            </div>
            <div className="form-group">
              <select 
                className="form-control" 
                name="" 
                id=""
                value={selectCity}
                onChange={(e) => setSelectCity(e.target.value)}
              >
                <option>
                  Selecione uma cidade
                </option>
                {
                  estados.map((estado, index) => (
                    <option key={index} value={estado.id}>
                      {estado.nome}
                    </option>
                  ))
                }
              </select>
            </div>
            <a href="" className="btn btnSearch">Buscar agora</a>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
