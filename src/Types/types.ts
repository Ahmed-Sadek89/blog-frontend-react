import React from 'react'

export type childrenProp = {
    children: React.ReactNode
}

export type postType = {
    id: number,
    title: string,
    desc: string,
    img: string,
    category: string,
    owner: {
        username: string,
        image: string,
        post_published: string,
    },
}

export type postContextType = {
    loading: boolean,
    error: boolean,
    data: postType[]
}