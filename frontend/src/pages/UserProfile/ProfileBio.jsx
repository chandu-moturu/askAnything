import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
      <div className="about_user">
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
      <div className="tags_watched">
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags Watched</h4>
            {currentProfile?.tags.map((tag, index) => {
              return <p key={index}>{tag}</p>;
            })}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
    </div>
  );
}

export default ProfileBio