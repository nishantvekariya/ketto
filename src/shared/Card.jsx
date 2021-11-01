import React from 'react';

const Card = (props) => {
  // console.log(props);
  const { user_name, user_profile, post_desc, post_image, post_tags  } = props.data;

  const deletePost = () => {
    console.log('das');
  }

    return (
      <React.Fragment>
        <div className="max-w-xl mx-auto m-4 px-4 py-4 bg-white shadow-md rounded-lg">
          <div className="py-2 flex flex-row items-center justify-start">
            {post_tags.length > 0 && post_tags.map((item, index) => (<p className="text-sm font-sans font-semibold text-gray-500 pl-2 pr-2">{item}</p>))}
          </div>
          <div className="py-2 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <a href="#" className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                <img className="rounded-full h-8 w-8 object-cover" src={user_profile.imageUrl} alt="" />
                <p className="ml-2 text-base font-medium">{user_name}</p>
              </a>
            </div>
            <div className="flex flex-row items-center">
              <button onClick={deletePost}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-snug">{post_desc}</p>
          </div>
          <div className="mt-2">
            <img className="object-cover w-full rounded-lg" src={post_image.imageUrl} alt="" />
          </div>
          
        </div>
        </React.Fragment>
    );
}
 
export default Card;