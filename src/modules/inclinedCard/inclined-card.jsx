import React from 'react';
import './inclinedCard.scss';
import Form from '../form/form';

const inclinedCard = () => {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default inclinedCard