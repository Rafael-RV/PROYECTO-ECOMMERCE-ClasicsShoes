import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contextApi/UserContext';
import '../../CSS/profile.css';

export const Profile = () => {
  const { user, isAuth, logout } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoaded();
  }, []);

  const isUserLoaded = () => {
    if (user || user == null) {
      setLoading(false);
      return;
    }
    if (!user) {
      setLoading(true);
    }
  };

  return (
    <>
      <section className="ms-4 mt-5 align-self-start">
        <div className="">
          <h2>Tus Datos</h2>
        </div>
      </section>
      {loading ? (
        'loading...'
      ) : (
        <section className="ms-4 align-self-start">
          <div className="d-flex flex-column">
            <div className="py-2 d-flex flex-row border-top">
              <p className="mb-0 ">Nombre</p>
              <p className="mb-0 ms-3 user-profile-data">
                <i>{user ? user.nombre : <i>..loading</i>}</i>
              </p>
            </div>
            <div className="py-2 d-flex flex-row border-top">
              <p className="mb-0 ">Apellido</p>
              <p className="mb-0 ms-3 user-profile-data">
                <i>{user ? user.apellido : <i>..loading</i>}</i>
              </p>
            </div>
            <div className="py-2 d-flex flex-row border-top">
              <p className="mb-0">Dirección</p>
              <p className="mb-0 ms-3 user-profile-data">
                <i>{user ? user.direccion : <i>..loading</i>}</i>
              </p>
            </div>
            <div className="py-2 d-flex flex-row border-top border-bottom">
              <p className="mb-0">Email</p>
              <p className="mb-0 ms-3 user-profile-data">
                <i>{user ? user.mail : <i>..loading</i>}</i>
              </p>
            </div>
          </div>
        </section>
      )}
     
    </>
  );
};
