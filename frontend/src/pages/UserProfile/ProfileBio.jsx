import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div className='tags_watched'>
        {
            currentProfile?.tags?.length !== 0 ?(
                <>
                  <h4>Tags Watched</h4>
                  {
                    currentProfile?.tags((tag)=>{
                        <p key={tag}>{tag}</p>
                        
                    })
                  }
                </>
            ):
            (
                <p>0 tags watched</p>
            )
        }
        </div>
        <div className='about_user'>
            {
                currentProfile?.about ? (
                    <>
                    <h4>About</h4>
                    <p>{currentProfile?.about}</p>
                    </>
                ):(
                    <p>No bio found</p>
                )
            }
        </div>
        
    </div>
  )
}

export default ProfileBio