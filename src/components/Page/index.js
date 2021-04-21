import React from 'react';
import PropTypes from 'prop-types';
import Title from 'src/components/Title';
import './styles.scss';

const Page = ({ children }) => (
  <main className="page">
    <Title />
    <div className="page__content">
      { children }
    </div>
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
