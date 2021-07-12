module.exports = ({ env }) => ({
  email: {
    provider: "sendmail",
    settings: {
      defaultFrom: "myemail@protonmail.com",
      defaultReplyTo: "myemail@protonmail.com",
    },
  },

  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "sa-east-1",
      params: {
        Bucket: "games-ecommerce-s3",
      },
    },
  },
});
