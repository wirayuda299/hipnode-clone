'use server';

import prisma from '@/prisma';

interface ParamsType {
  name?: string;
  email: string;
  id?: string;
}

interface CreateUserParams {
  name: string;
  email: string;
}

export async function createUser(userData: CreateUserParams) {
  const { name, email } = userData;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.log('No used created');
  }
}

export async function updateUser(params: ParamsType) {
  const { email, name } = params;

  try {
    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });
    return updatedUser;
  } catch (error) {
    console.log('Error with update user');
  }
}

export async function deleteUser(email: string) {
  const deltedUserFromMongoDb = await prisma.user.delete({
    where: {
      email,
    },
  });

  return deltedUserFromMongoDb;
}

export async function getUserByPostAuthor(email: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    throw error;
  }
}
