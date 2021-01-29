let characters = [
  {
    id: "1",
    name: 'Naruto Uzumaki',
    manga: 'Naruto',
  },
  {
    id: "2",
    name: 'Monkey D. Luffy',
    manga: 'One Piece',
  },
  {
    id: "3",
    name: 'Ichigo Kurosaki',
    manga: 'Bleach',
  },
];

export const characterResolver = (context, args, root) => {
  const {id} = args

  const [character] = characters.filter(({id: characterId}) => characterId === id )
  
  return character || null
}

export const charactersResolver = () => characters || []

export const createCharacterResolver = (context, args, root) => {
  const {input} = args

  const id = (Number(characters[characters.length-1].id) + 1).toString()
  
  const character = {id, ...input}

  characters.push(character)
  
  return character
}

export const deleteCharacterResolver = (context, args, root) => {
  const {id} = args

  const preFilter = characters.length
  
  characters = characters.filter(({id: characterId}) => characterId !== id )
  
  const postFilter = characters.length

  return preFilter !== postFilter
} 