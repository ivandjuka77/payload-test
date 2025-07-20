import type { Payload } from 'payload'

export const seedUsers = async (payload: Payload) => {
  payload.logger.info('— Seeding users and authors...')

  await Promise.all([
    payload.delete({
      collection: 'users',
      where: {
        email: {
          equals: 'roman.karlubik@chemox.sk',
        },
      },
    }),
    payload.delete({
      collection: 'users',
      where: {
        email: {
          equals: 'seviour@vupas.sk',
        },
      },
    }),
    payload.delete({
      collection: 'users',
      where: {
        email: {
          equals: 'ivandjuka777@gmail.com',
        },
      },
    }),
  ])

  const [demoAuthor, _] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Roman Karlubik',
        email: 'roman.karlubik@chemox.sk',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        name: 'Christopher Seviour',
        email: 'seviour@vupas.sk',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        name: 'Ivan Djukic',
        email: 'ivandjuka777@gmail.com',
        password: 'password',
      },
    }),
  ])

  return { demoAuthor }
}

export type SeededUsers = Awaited<ReturnType<typeof seedUsers>>
