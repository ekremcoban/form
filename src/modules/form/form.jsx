import React from 'react';
import './form.scss';
import Button from '../button/button';

const form = () => {
    return (
        <form action="#" className="form">
            <div className="form__group">
                <input type="text" className="form__input" placeholder="Full Name" id="name" required></input>
                <label for="name" className="form__label">Full Name</label>
            </div>
            <div className="form__group">
                <input type="email" className="form__input" placeholder="Email address" id="email" required></input>
                <label for="email" className="form__label">Email address</label>
            </div>
            <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="small" name="size" />
                    <label for="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                    </label>
                </div>
                <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="large" name="size" />
                    <label for="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                    </label>
                </div>
            </div>
            <div className="form__group">
                <Button />
            </div>
        </form>

    );
}

export default form