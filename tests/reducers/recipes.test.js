import { should } from 'chai';

import recipesReducer, { initialState } from 'src/reducers/recipes';

import { saveRecipes } from 'src/actions/recipes';

// avec should, il faut exécuter la fonction pour pouvoir l'utiliser dans nos tests
should();

// describe de la lib Mocha va nous permettre de faire nos chapitres/sous-chapitre ... afin de classer nos tests, voir ce qu'on test dans le terminal
// .only permet d'isoler le ou les tests sur lequels on travaille
describe('Recipes reducer test', () => {
  // Décrit un sous-chapitre de mes tests
  describe('Structure', () => {
    // dans un chapitre de test, on peut avoir un ou plusieurs tests
    it('should be a function', () => {
      // pour tester le type de notre unité de code, on a la function a() ou an()
      recipesReducer.should.be.a('function');
    });
    it('should return an object', () => {
      // on s'assure que le reducer renvoie bien un objet
      recipesReducer().should.be.an('object');
      // et que cet objet correspond à l'initialState du reducer
      // pour les objets et les tableaux, il faut passer par la fonction .eql() ou .deep.equal() si on veut comparer les valeurs de ceux-ci. Sinon avec equal() on compare les références (===)
      // 2 possibilités: 
      // soit on importe l'objet initialState du reducer
      recipesReducer().should.be.eql(initialState);
      // soit on crée un objet qui ressemble à l'initialState
      // recipesReducer().should.be.eql({
      //   list: [],
      // });
    });
  });

  describe('With actions', () => {
    it('should return a new state when passing SAVE_RECIPES action', () => {
      // on crée un jeu de données bidon
      const newRecipes = [{ a: 1 }, { b: 2 }];
      // je crée mon action avec en argument les newRecipes, celles-ci seront stockées dans la propriété "recipe" de l'action
      const action = saveRecipes(newRecipes);
      // on exécute notre fonction reducer et on lui passe un state et l'action qu'on a préparé.
      const modifiedState = recipesReducer(initialState, action);

      // on vérifier que le state de retour est bien égale à un objet avec la propriété list dedans. Cette propriété doit être à newRecipes
      modifiedState.should.be.eql({ list: newRecipes });
    });
  });
});
