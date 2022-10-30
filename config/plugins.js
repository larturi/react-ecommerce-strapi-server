module.exports = ({ env }) => ({
  email: {
    provider: "sendmail",
    settings: {
      defaultFrom: "noreply@gaming-app.com",
      defaultReplyTo: "noreply@gaming-app.com",
    },
  },

  // upload: {
  //   provider: "aws-s3",
  //   providerOptions: {
  //     accessKeyId: env("AWS_ACCESS_KEY_ID"),
  //     secretAccessKey: env("AWS_ACCESS_SECRET"),
  //     region: "sa-east-1",
  //     params: {
  //       Bucket: "games-ecommerce-s3",
  //     },
  //   },
  // },

  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {
        folder: env('CLOUDINARY_FOLDER'),
      },
      delete: {},
    },
  },
  
});
