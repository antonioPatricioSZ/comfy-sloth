/* eslint-disable no-undef */

export async function handler (event, context) {
   return {
      statusCode: 200,
      body: "Hello World"
   }
}
// npx netlify dev