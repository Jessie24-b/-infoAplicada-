export interface JwtResponse {
    user:{
        id:number,
        name: string,
        apellidos: string,
        accessToken: string,
        expiresIn:string
    }
}
