import React, {  useState } from 'react';

import './AddNews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const AddNews = ({isVisible, setIsVisible : handleIsVisible, tags}) => {
    const [postDescription, setPostDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [image] = useState({file: "", imageUrl: "", extension: ""});

    const setPostDescriptionHandler = (e) => {
        setPostDescription(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(formValid()){
            let feed = localStorage.getItem('feed_data') || [];
            
            let feedObj = {
                'user_name': 'Nishant',
                'user_profile': "",
                'post_desc': postDescription, 
                'post_image': image, 
                'post_tags': selectedTags
            };

            if(typeof feed === "string"){
                feed = JSON.parse(feed);
            }

            feed.push(feedObj);
            localStorage.setItem('feed_data', JSON.stringify(feed));
            window.location.reload();
        }
    }

    const handleSetSelected = (tag) => {
        let selectedTagsNew = [];
        if(selectedTags.includes(tag)) {
            selectedTagsNew = selectedTags.filter(st => st !== tag);
        }else {
            selectedTagsNew = [ ...selectedTags, tag];
        }
        setSelectedTags(selectedTagsNew);
    }

    const formValid = () => {
        let post_desc = postDescription;
        if(post_desc.trim().length === 0){
            alert('Please add some content');
            return false
        }
        return true;
    }

    const setImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            image.file = file;
            image.imageUrl = reader.result;
            image.extension = file.name.split('.')[file.name.split('.').length - 1];
        }

        reader.readAsDataURL(file); 
        // console.log(file);
    }
    

    return (
        <React.Fragment>
            <div className={`main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${isVisible ? "" : "hidden"}`}>
                <div className="border border-green-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold text-gray-500">Add New Post</p>
                            <div className="modal-close cursor-pointer z-50" onClick={(e) => handleIsVisible(false)}>
                                <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="my-5 mr-5 ml-5 flex justify-center">
                            <form action="{{url_for('default.add_caretaker', apartment_id = apartment.id)}}" method="POST" id="add_caretaker_form"  className="w-full">
                                <div className="">
                                <textarea
                                    className="form-textarea mt-1 block w-full"
                                    rows="4"
                                    placeholder="Enter some long form content."
                                    onChange={setPostDescriptionHandler}
                                    value={postDescription}
                                ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="flex items-end text-green-400 justify-end py-2 px-12 border-t">
                            <div>
                                {image ? <img src={image['imageUrl']} /> : ""}
                            </div>
                            <label >
                                <FontAwesomeIcon icon={faImage} />
                                <input type='file' className="hidden" onChange={e => setImage(e)}/>
                            </label>
                        </div>
                        <div>
                        {tags && tags.map(tag => {
                            let btnClass = selectedTags.includes(tag) ?'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded-full m-1' : 'bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:bg-green-500 py-2 px-4 border border-green-500 hover:border-transparent rounded-full m-1';
                            return (
                                <button 
                                    type="button" 
                                    onClick={(e) => handleSetSelected(tag)}
                                    className={btnClass}>
                                    {tag} {selectedTags.includes(tag) ?
                                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18" stroke="white" style={{display: 'inline'}}>
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg> : ``}
                                </button>
                            )
                        })}
                        </div>
                        <div className="flex justify-end pt-2 space-x-14">
                            <button className="px-4 bg-green-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" onClick={formSubmitHandler}>POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default AddNews;
