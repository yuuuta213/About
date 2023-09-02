import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';

const Mypage = () => {
  const [user, setUser] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });
  }, []);

  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate('/sign-in/');
  };

  return (
    <>
      {/* 多重リダイレクトの防止 */}
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/sign-in/`} />
          ) : (
            <>
              <div>
                <h1>マイページ</h1>
                <p>{user?.email}</p>
                <button onClick={logout}>ログアウト</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;
