import type { Payload } from 'payload'

export const seedUsers = async (payload: Payload) => {
  payload.logger.info('— Seeding users and authors...')

  await Promise.all([
    payload.delete({
      collection: 'users',
      where: {
        email: {
          equals: 'demo-author@example.com',
        },
      },
    }),
    payload.delete({
      collection: 'users',
      where: {
        email: {
          equals: 'sarah.chen@vup-chemical.com',
        },
      },
    }),
  ])

  const [demoAuthor, _] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Dr. Sarah Chen',
        email: 'sarah.chen@vup-chemical.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
  ])

  return { demoAuthor }
}

export type SeededUsers = Awaited<ReturnType<typeof seedUsers>>
