export const registerNewUser = async (formData) => {
  'use server'
  const firstName = formData.get('first_name')
  const lastName = formData.get('last_name')
  const email = formData.get('email')
  const password = formData.get('password')
  const referral = formData.get('referral_source')

  const body = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    referral_source: referral,
  }

  console.log('body', body)

  await fetch('http://localhost:3000/app/api/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}
