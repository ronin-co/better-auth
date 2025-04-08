import { blob, boolean, date, link, model, string } from 'ronin/schema';

export const User = model({
  slug: 'user',
  pluralSlug: 'users',
  idPrefix: 'usr',
  fields: {
    email: string({ required: true, unique: true }),
    emailVerified: boolean({ required: true }),
    image: blob(),
    name: string({ required: true }),
  },
});

export const Sessions = model({
  slug: 'session',
  pluralSlug: 'sessions',
  fields: {
    expiresAt: date({ required: true }),
    ipAddress: string(),
    token: string({ required: true, unique: true }),
    user: link({
      actions: {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      // required: true,
      target: 'user',
    }),
    userAgent: string(),
  },
});

export const Account = model({
  slug: 'account',
  pluralSlug: 'accounts',
  fields: {
    accessToken: string(),
    accessTokenExpiresAt: date(),
    accountId: string({
      // required: true
    }),
    idToken: string(),
    password: string(),
    providerId: string({ required: true }),
    refreshToken: string(),
    refreshTokenExpiresAt: date(),
    scope: string(),
    user: link({
      actions: {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      // required: true,
      target: 'user',
    }),
  },
});

export const Verification = model({
  slug: 'verification',
  pluralSlug: 'verifications',
  fields: {
    expiresAt: date({ required: true }),
    identifier: string({ required: true }),
    value: string({ required: true }),
  },
});
