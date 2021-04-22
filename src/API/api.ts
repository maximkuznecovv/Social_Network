import axios from 'axios';

export type ResponseItemType = {
    'name': string
    'id': number
    'uniqueUrlName': null | string
    'photos': {
        'small': null | string
        'large': null | string
    },
    'status': null | string
    'followed': boolean
}
export type ServerData = {
    'items': ResponseItemType[]
    'totalCount': number
    'error': null | string
}
type ResponseType = {
    data: ServerData
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd3770eb8-29c4-4795-b7e7-7e0c4402b534'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get<ServerData>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: ResponseType) => response.data)
    },
    follow: (id: number = 2) => {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then((response) => response.data)
    },
    unfollow: (id: number = 2) => {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then((response) => response.data)
    }
}