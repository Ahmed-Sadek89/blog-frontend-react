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



export type categoryType = {
    id: number,
    cat_name: string,
    created_at: string
}

export type postType = {
    id: number,
    title: string,
    description: string,
    post_image: string,
    cat_name: string,
    user: {
        username: string,
        email: string,
        image: string,
    },
}

export type postContextType = {
    loading: boolean,
    error: boolean,
    data: postType[]
}