//Trello id:11
import React from 'react';
import { useState } from 'react'
import './CommentForm.css'
import { postData } from '../../api';

const CommentForm = ({ id, addComment }) => {
    const [form, setForm] = useState({
        comment: "",
        name: "",
        isAnonymous: false,
        isSubmitted: false,
        isFocused: false,
    })

    const handleFocus = () => {
        setForm(prev => ({
            ...prev,
            isFocused: true
        }));
    };
    const resetForm = () => {
        setForm({
            comment: "",
            name: "",
            isAnonymous: false,
            isSubmitted: false,
            isFocused: false,
        });
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setForm(prev => ({
            ...prev,
            isSubmitted: true
        }));

        const newComment = await postData(import.meta.env.VITE_API_URL + `/recipes/${id}/comments`, {
            name: form.isAnonymous ? 'Anonym' : form.name,
            comment: form.comment
        })
        console.log(newComment);

        //Resets state if comment post fails.
        if (newComment) {
            addComment(newComment);
        } else {
            setForm(prev => ({
                ...prev,
                isSubmitted: false
            }));
        }

    }

    return (
        <div className='comment__form-container'>

            {form.isSubmitted ? (
                <div className='comment__form-success'>
                    <h2>Tack för din kommentar!</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='comment__form'>
                    <h2>Kommentera eller fråga</h2>
                    <textarea
                        className={`comment__form-text ${form.isFocused ? 'comment__form-text--expanded' : ''}`}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        name="comment"
                        placeholder='Skriv en kommentar'
                        maxLength="365"
                        wrap='soft'
                        value={form.comment}
                        required
                    />
                    {form.isFocused && (
                        <>
                            <input
                                id='comment__form-name'
                                className={`comment__form-name ${form.isFocused ? 'comment__form-name--visible' : ''}`}
                                type="text"
                                onChange={handleChange}
                                name="name"
                                placeholder='Namn'
                                maxLength="30"
                                value={form.name}
                                required={!form.isAnonymous}
                            />
                            <div>
                                <label className='comment__form-checkbox'>
                                    <input
                                        type="checkbox"
                                        onChange={handleChange}
                                        name="isAnonymous"
                                        checked={form.isAnonymous}
                                    />
                                    Skicka anonymt
                                </label>
                            </div>

                            <div className='comment__form-button-container'>
                                <button className="comment__form-button" type="submit">Skicka in</button>
                                <button className="comment__form-button" type="button" onClick={resetForm}>Avbryt</button>
                            </div>
                        </>
                    )} 
                </form>
            )}
        </div>
    );
}

export default CommentForm;