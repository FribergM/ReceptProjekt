import React from 'react';
import { useState } from 'react'
import './CommentForm.css'

const CommentForm = ({id}) => {
    const [form, setForm] = useState({
        comment: "",
        name: "",
        isAnonymous: false,
        isSubmitted: false,
        // date: "",
    })

    const handleChange = (e) => {
        const {name, type, value, checked} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    console.log(form)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setForm(prev => ({
            ...prev,
            isSubmitted: true
        }));

        const success = await postComment();

        if(!success) {
            setForm(prev => ({
                ...prev,
                isSubmitted: false
            }));
        }
    }

    const postComment = async () => {
        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL + `/recipes/${id}/comments`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        comment: form.comment,
                        name: form.isAnonymous ? 'Anonym' : form.name
                    }),
                }
            );
    
            if (response.ok) {
                console.log("Ok:", { id });
                return true;
            } else {
                console.error("Error:", response.statusText);
                return false;
            }

        } catch (error) {
          console.error("Error:", error);
          return false;
        }
      };
    
    return (
        <div className='comment__form-container'>

            {form.isSubmitted ? (
                <div className='comment__form-success'>
                    <h2>Tack för din kommentar!</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='comment__form'>
                    <input
                        id='comment__form-name'
                        className=''
                        type="text"
                        onChange={handleChange}
                        name="name"
                        placeholder='Namn'
                        required={!form.isAnonymous}
                        />
                    <div>
                        <label className='comment__form-checkbox'>
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                name="isAnonymous"
                                />
                            Skicka anonymt
                        </label>
                    </div>
                    
                    <textarea
                        className='comment__form-text'
                        onChange={handleChange}
                        name="comment"
                        placeholder='Lämna gärna en kommentar!'
                        maxLength="300"
                        wrap='soft'
                        required
                        />
                    <button className="comment__form-button" type="submit">Skicka in</button>
                </form>
            )}
        </div>
    );
}

export default CommentForm;