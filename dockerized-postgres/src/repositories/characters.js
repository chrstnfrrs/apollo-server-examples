import {prisma} from '../adapters/prisma-client'

export const deleteCharacter = async (id) => await prisma.character.delete({ where: { id }})

export const insertCharacter = async (character) => await prisma.character.create({data: character})

export const selectCharacterById = async (id) => await prisma.character.findUnique({where: {id}})

export const selectCharacters = async () => await prisma.character.findMany()

export const updateCharacter = async (id, character) => await prisma.character.update({where: {id}, data: character})