import React from 'react';
import './styles.css';

const ButtonTranslate = ({ children }) => (
    <button className='button-translate'>{ children }</button>
);

const ContainerButtonsTranslate = () => (
    <div className='container-buttons-translate'>
        <ButtonTranslate>pt-br</ButtonTranslate>
        <ButtonTranslate>eng</ButtonTranslate>
    </div>
) 

export default ContainerButtonsTranslate;