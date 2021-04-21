import React from 'react';
import { should } from 'chai';
import { shallow } from 'enzyme';
import Home from 'src/components/Home';
import Card from 'src/components/Card';

should();

describe('Home component', () => {
  // on prépare un jeu de données bidon pour les recettes qu'on passera en props de Home
  const recipes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  // on crée un container qui va venir rendre notre composant. Equivalent à un DOM pour venir tester structurellement notre composant
  const wrapper = shallow(<Home recipes={recipes} />);

  it('should render h2', () => {
    wrapper.find('h2').should.have.lengthOf(1);
  });

  it('should have Card component', () => {
    wrapper.find(Card).should.have.lengthOf(4);
  });

  it('should have className', () => {
    wrapper.find('.home__content').should.have.lengthOf(1);
  });
});
