import { useState } from 'react';

const Header = () => {
  const [nameCity, setNameCity] = useState('');

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">

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
              <select className="form-control" name="" id="">
                <option value="" selected disabled>Selecione uma cidade</option>
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