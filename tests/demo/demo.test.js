import { expect, should } from 'chai';

// Variable de demo
const value = 2;
// Fonction de demo
const sum = (a, b) => a + b;

// == Avec should

// préparation de should
should();

// Mocha se sert de 2 fonctions principales
// - describe: qui va nous servir à chapitrer/classer nos tests
// - it: qui va lancer le test

// Chai va nous aider à faire les assertions/hypothèses pour nos tests

// Décrit une série de tests ici
describe('Série de tests : sum()', () => {
  // Un test
  it('should be a function', () => {
    sum.should.be.a('function');
  });

  it('should return sum of parameters', () => {
    sum(1, 2).should.be.equal(3);
    sum(-1, 1).should.be.equal(0);
  });

  // Un test en attente
  it('should ...');
});

// == Avec expect

// Série de tests - Chapitre de tests
describe('Série de tests : variable', () => {
  // Test
  it('should pass', () => {
    // expect de chai
    expect(value).to.be.equal(2);
  });

  // Test en erreur
  it('should not pass', () => {
    // expect de chai
    expect(false).to.be.equal(true);
  });

  describe('Sous chapitre - pending', () => {
    // Test en attente : pas de fonction de traitement
    it('test pending');
    // Il ne faut pas passer une fonction vide au test, car cela le valide !
    // A EVITER
    // it('test pending', () => {});

    // Test en attente : .skip
    it.skip('should skip this test', () => {
      // code
      expect(true).to.be.equal(true);
    });
  });
});
