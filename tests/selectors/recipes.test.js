// tester getSlugFromTitle
// vérifier que c'est une fonction
// vérifier que la fonction nous retourne une chaîne de caractères
// vérifier que quand on envoie une chaîne de caractère à la fonction, on reçoit cette chaîne en minuscule avec des tirets (Crêpes raffinées => crepes-raffinees)
import { should } from 'chai';
import { getSlugFromTitle, getTitleByRecipeNumber } from 'src/selectors';

should();

describe('Selectors tests', () => {
  describe('getSlugFromTitle', () => {
    describe('Structure', () => {
      it('should be a function', () => {
        getSlugFromTitle.should.be.a('function');
      });
      it('should return a string', () => {
        getSlugFromTitle('test').should.be.a('string');
        getSlugFromTitle().should.be.a('string');
      });
    });

    describe('Execution', () => {
      it('should return a slugified string', () => {
        getSlugFromTitle('Crêpes raffinées.').should.be.equal('crepes-raffinees');
        getSlugFromTitle('éè@& 123&').should.be.equal('ee-123');
        getSlugFromTitle('poulet_au_gingembre').should.be.equal('poulet-au-gingembre');
      });
    });
  });

  describe('getTitleByRecipeNumber', () => {
    describe('Structure', () => {
      it('should be a function', () => {
        getTitleByRecipeNumber.should.be.a('function');
      });
      it('should return a string', () => {
        getTitleByRecipeNumber().should.be.a('string');
      });
    });

    describe('Execution', () => {
      it('should return "Pas de recette pour le moment, revenez plus tard" when recipe number equal 0', () => {
        getTitleByRecipeNumber(0).should.be.equal('Pas de recette pour le moment, revenez plus tard');
      });

      it('should return "Découvrez notre recette" if recipe number equal to 1', () => {
        getTitleByRecipeNumber(1).should.be.equal('Découvrez notre recette');
      });

      it('should return "Découvrez nos recettes" if recipe number more than 1', () => {
        getTitleByRecipeNumber(10).should.be.equal('Découvrez nos recettes');
      });
    });
  });
});
