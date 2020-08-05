import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface IPageHeader {
    title: string;
    description?: string;
}

const PageHeader: React.FC<IPageHeader> = ({ title, description, children }) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logo} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{title}</strong>

            {description && <p>{description}</p> }

            {children}
        </div>
    </header>
  );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default PageHeader;
