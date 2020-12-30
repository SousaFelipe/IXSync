


export default class User {


    constructor(props) {
        this.id = props.id
        this.code = props.code
        this.name = props.name
        this.email = props.email
        this.access = props.access
    }


    static getPosition (access) {
        switch (access) {
            case 'AD':
                return 'Administrativo'
            case 'CX':
                return 'Caixa'
            case 'FN':
                return 'Financeiro'
            case 'OP':
                return 'Operacional'
            default:
                return 'Convidado'
        }
    }

}
