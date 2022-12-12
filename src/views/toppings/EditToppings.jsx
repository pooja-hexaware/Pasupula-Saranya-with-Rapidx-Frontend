import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { editToppings } from './store/toppings.action'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const EditToppings = () => {
    const { id: toppingsId } = useParams()

    const toppings = useSelector((state) =>
        state.toppings.entities.find(
            (toppings) => toppings.id.toString() === toppingsId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [tname, setTname] = useState(toppings.tname)
    const [tdesc, setTdesc] = useState(toppings.tdesc)
    const [price, setPrice] = useState(toppings.price)

    const handleTname = (e) => setTname(e.target.value)
    const handleTdesc = (e) => setTdesc(e.target.value)
    const handlePrice = (e) => setPrice(parseInt(e.target.value))

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            editToppings({
                id: toppingsId,
                tname,
                tdesc,
                price,
            })
        )
        navigate('/toppings')
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'EditToppings', path: '/toppings' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="text"
                                name="tname"
                                id="tnameInput"
                                onChange={handleTname}
                                value={tname}
                                validators={['required']}
                                label="Tname"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="tdesc"
                                id="tdescInput"
                                onChange={handleTdesc}
                                value={tdesc}
                                validators={['required']}
                                label="Tdesc"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                type="number"
                                name="price"
                                id="priceInput"
                                onChange={handlePrice}
                                value={price || ''}
                                validators={['required']}
                                label="Price"
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>send</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Save
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default EditToppings
