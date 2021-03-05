export default {
  baseUrl: process.env.BASE_URL || 'https://9ddlz0bte4.execute-api.us-east-2.amazonaws.com/prod',
  credentials: {
    name: process.env.CREDENTIAL_NAME || 'NEWSCHOOL@FRONT',
    secret: process.env.CREDENTIAL_SECRET || 'NEWSCHOOL@FRONTSECRET',
  },
  sentryDsn: process.env.SENTRY_DSN || 'SENTRY_DSN'
}
