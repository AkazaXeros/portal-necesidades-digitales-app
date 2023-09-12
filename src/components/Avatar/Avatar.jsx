const Avatar = ({ avatar, userName }) => {
  const avatarPlaceHolder = userName?.substring(0, 1).toUpperCase();
  return (
    <section className="avatarImg">
      {avatar ? (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${avatar}`}
          alt="avatar"
          className="avatarImg"
        />
      ) : (
        <div className="avatarPlaceHolder">{avatarPlaceHolder}</div>
      )}
    </section>
  );
};
export default Avatar;
