import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <div>Bạn chưa đăng nhập!</div>;
  }

  return (
    <div className="profile-page">
      <h1>Hồ Sơ Người Dùng</h1>
      <p>Tên: {user.name}</p>
    </div>
  );
};

export default ProfilePage;