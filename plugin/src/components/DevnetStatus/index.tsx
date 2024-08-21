import React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { useAtomValue } from 'jotai'
import { envAtom, isDevnetAliveAtom } from '@/atoms'

export const DevnetStatus = () => {
  const env = useAtomValue(envAtom)
  const isDevnetAlive = useAtomValue(isDevnetAliveAtom)

  return (
    <>
      {env === 'wallet' ? (
        <RxDotFilled size={'30px'} color="rebeccapurple" title="Wallet is active" />
      ) : isDevnetAlive ? (
        <RxDotFilled size={'30px'} color="lime" title="Devnet is live" />
      ) : (
        <RxDotFilled size={'30px'} color="red" title="Devnet server down" />
      )}
    </>
  )
}
