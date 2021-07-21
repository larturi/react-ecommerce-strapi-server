module.exports = ({ env }) => ({
  email: {
    provider: "sendmail",
    settings: {
      defaultFrom: "noreply@gaming-app.com",
      defaultReplyTo: "noreply@gaming-app.com",
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
