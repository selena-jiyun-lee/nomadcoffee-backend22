import client from '../client';
import bcrypt from 'bcrypt';

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      try {
        const checkExistingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (checkExistingUser) {
          return {
            ok: false,
            error: 'Username or Email you input are already taken.',
          };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            password: hashedPassword,
            avatarURL,
            githubUsername,
          },
        });
        return { ok: user != null };
      } catch (error) {
        return { ok: false, error: error };
      }
    },
  },
};
