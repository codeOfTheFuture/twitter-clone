export default {
  name: "reply",
  title: "Reply",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in reply",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference the Tweet the comment is associated to:",
      type: "reference",
      to: {
        type: "tweet",
      },
    },
  ],
};
