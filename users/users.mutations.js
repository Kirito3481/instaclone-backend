import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [{ username }, { email }],
        },
      });

      // hash password
      // 저장 후 User 반환
    },
  },
};
