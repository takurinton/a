import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@chakra-ui/button'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      {/* @ts-ignore */}
      <Button onClick={signIn}>Sign in</Button>
    </>}
    {session && <>
      username: {session.user?.name} <br/>
      {/* @ts-ignore */}
      token:  {session.token} <br/>
      {/* @ts-ignore */}
      <Button onClick={signOut}>Sign out</Button>
    </>}
  </>
}