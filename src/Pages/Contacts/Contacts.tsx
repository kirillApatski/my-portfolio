import React from 'react';
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsWrapp}>
            <h3 className={style.contactsTitle}>Contacts</h3>
            <div className={style.contactsContent}>
                <div className={style.addressBlock}>

                </div>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
            </div>
        </div>
    );
};

