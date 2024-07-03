# Exercices

## Rappels

Créer un nouveau composant `src/app/components/pokemon-card-details.jsx` dont le JSX reprend les lignes 25 à 83
de `src/app/pages/pokemon-detail.jsx`

Ce nouveau composant reçoit l'objet pokemon en props

Remplacer ensuite les lignes 25 à 83 de `src/app/pages/pokemon-detail.jsx` par ce nouveau composant

Créer une nouvelle page `src/app/pages/pokemon-compare.jsx` contenant le JSX suivant :

```
<div className="row">
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
```

Les variables `pokemon1` et `pokemon2` doivent contenir les pokemon dont les ids sont `1` et `2`, utiliser le
service `getPokemon` pour les récupérer.

Créer la route dans `app.tsx`, l'URL peut etre par exemple `/pokemons/compare`

Créer un bouton en bas de la page `src/app/pages/pokemon-list.jsx`, sur son click appeler la méthode navigate (voir par
exemple `src/app/components/pokemon-card.jsx`)

Dans le composant `src/app/components/pokemon-card.jsx` déplacer le `onClick` sur un bouton "Details" dans la carte (on
se servira du click de la carte pour séléctionner les éléments à comparer), sur le click il faudra appeler
la `event.stopPropagation()` (pour ne pas déclencher le click des ancetres).

## Fragments + Render Props

Créer un nouveau composant List dans `src/app/components/list.jsx` en partant du code suivant :

```
function List({ items, renderItem }) {

}

export default List;
```

Dans ce composant List nous allons boucler sur les items et afficher dans le JSX le retour de la fonction `renderItem`, ce JSX sera encapsulé dans un Fragment.

Utiliser ce composant List à la place de `pokemons.map` dans le composant `src/app/pages/pokemon-list.jsx` (on verra demain l'intérêt d'avoir un composant ici)

Idem pour le `.map` à la ligne 302 de `src/app/components/pokemon-form.jsx`

## Context

Créer un context `CompareContext` en s'inspirant de l'exemple :
[https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks](https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks)

L'idée est de stocker les id des pokemons à comparer dans le context (en utilisant par exemple un tableau), il faudra limiter à 2 pokemons (vous pouvez augmenter la limite si vous le souhaitez mais il faudra jouer sur le nombre de colonnes dans la page `PokemonCompare`).

Dans `src/app/components/pokemon-card.tsx` écouter le click de la carte (là où vous aviez déplacé le onClick dans l'exercice précédent) pour sélectionner ou déselectionner le Pokemon à comparer. Le lien vers la page `/pokemons/compare` ne devrait être actif que s'il y a 2 pokemons à comparer.

## Custom Hooks

Créer un custom hook `useSelectedPokemons()` qui retourne les pokemons sélectionnés dans le context et l'utiliser dans `PokemonCompare`.



## Redux

Nous allons migrer `CompareContext` vers Redux.

Ajouter une nouvelle clé `idsToCompare` au state `pokemons` (de type `number[]`)

Le state global stocké dans Redux sera donc de la forme :
```
{
  items: [], // tableau de pokemons,
  loading: false, // est-ce qu'une requete est en cours,
  searchTerm: '', // le contenu du champ de recherche
  idsToCompare: [2, 5], // les ids des pokemons à comparer
}
```

Créer un action creator `selectId` qui retourne un objet :

```
{
type: 'pokemons/selectId',
payload: 2, // l'id du pokemon sélectionné
}
```

Modifier le reducer `pokemonsReducer` de sorte à ce qu'il modifie le state comme précédemment avec le context (ajoute l'id si absent de `idsToCompare`, retire l'id sinon)

Tester avec Redux DevTools en faisant des dispatch de l'action :

```
{
type: 'pokemons/selectId',
payload: 2, // l'id du pokemon sélectionné
}
```

Utiliser `useDispatch` pour créer l'action `pokemons/selectId` lorsqu'on clique sur la carte dans `PokemonCard` (à la place de `toggleIdSelection`)

Créer et utiliser `idsToCompareSelector` pour récupérer les `idsToCompare` dans `PokemonCard` et modifier la couleur de fond de la carte comme avec le context (`idsToCompare.includes(pokemon.id ?? 0)`)

Créer un sélecteur `pokemonsToCompareSelector` qui transforme la clé `idsToCompare` du state en tableau de pokemon à comparer. Appeler ce selecteur dans `PokemonCompare`, faire le même dispatch que dans PokemonList au chargement de PokemonCompare : 

```
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
```

Bonus : installer et configurer Redux Persist https://github.com/rt2zz/redux-persist

Bonus : Utiliser `createSelector` pour ne pas réexécuter `pokemonsToCompareSelector` si `idsToCompare` et `items` ne changent pas (memoisation: voir la doc de redux toolkit)

