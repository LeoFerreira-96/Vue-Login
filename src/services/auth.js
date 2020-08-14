import {apollo, onLogin} from '../plugins/apollo'
import gql from 'graphql-tag'

const login = async (user, password) => {
    const response = await apollo.query({
        query: gql`
        query Login($user: String!, $password: String!){
            Login(email: $user, password: $password) {
                token
                refreshToken
                user {
                    name
                    email
                    firstLogin
                    role {
                        key
                        permissions {
                            key
                        }
                }
                }
            }
        }`,
            email: user,
            password: password,
    })
    const {login} = response.data
    await onLogin(apollo, login.token)
    return login
}
export default {
    login
}