

import _ from 'lodash'
import React from 'react'
import { Search, Grid, Input } from 'semantic-ui-react'


import config from '../config'



const initialState = {
    loading: false,
    results: [],
    value: '',
}



function Reducer(state, action) {
    switch (action.type) {

        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }

        default:
            throw new Error()
    }
}



function StandardSearch() {



    const [state, dispatch] = React.useReducer(Reducer, initialState)
    const { loading, results, value } = state
    const timeoutRef = React.useRef()



    const handleSearchChange = React.useCallback((e, data) => {

        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        fetch(`${ config.ixsHost }/clientes/listar/${ data.value }/razao`)
            .then(response => response.json())
            .then(response => {

                console.log(response.clientes)

                const re = new RegExp(_.escapeRegExp(data.value), 'i')
                const isMatch = (result) => re.test(result.razao)

                dispatch({
                    type: 'FINISH_SEARCH',
                    results: _.filter(response.clientes, isMatch),
                })

            })

    }, [])



    React.useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])



    return (
        <Grid>
            <Grid.Column>
                <Search
                    as={Input}
                    icon='search'
                    iconPosition='left'
                    loading={ loading }
                    // onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title }) }
                    onSearchChange={ handleSearchChange }
                    placeholder='Nome ou CPF do cliente...'
                    results={ results }
                    value={ value }
                    size='huge'
                    transparent
                    fluid
                />
            </Grid.Column>
        </Grid>
    )
}



export default StandardSearch
