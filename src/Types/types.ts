import React from 'react'

export type childrenProp = {
    children: React.ReactNode
}
export type userRegister = {
    status: number,
    result: string
}

export type userLogin = {
    status: number,
    result: string,
    token?: string
}




