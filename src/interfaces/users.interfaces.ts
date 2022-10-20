export interface IUserRequest {
    name: string
    email: string
    isAdm: boolean
    password?: string
}

export interface IUserUpdateRequest {
    name?: string
    email?: string
    password?: string
}

export interface IUserResponse extends IUserRequest {
    id: string
}