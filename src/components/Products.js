import React from 'react'
import SimpleCard from './SimpleCard';
import { Grid } from '@material-ui/core'

export default function Products() {
    return (
        <div>
            <Grid container spacing={4}>

                <Grid item xs={12} sm={4}>
                    <SimpleCard
                    title="item teste"
                    price="100,00"
                    imgSrc="https://images.tcdn.com.br/img/img_prod/615061/peixe_tilapia_de_parede_em_alto_relevo_para_decoracao_310_1_20180327215059.jpg"
                    description="lore ipsum"
                    category="casa"
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <SimpleCard
                    title="item teste"
                    price="100,00"
                    imgSrc="https://images.tcdn.com.br/img/img_prod/615061/peixe_tilapia_de_parede_em_alto_relevo_para_decoracao_310_1_20180327215059.jpg"
                    description="lore ipsum"
                    category="Peixe"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SimpleCard
                    title="item teste"
                    price="100,00"
                    imgSrc="https://images.tcdn.com.br/img/img_prod/615061/peixe_tilapia_de_parede_em_alto_relevo_para_decoracao_310_1_20180327215059.jpg"
                    description="lore ipsum"
                    category="Peixe"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SimpleCard
                    title="item teste"
                    price="100,00"
                    imgSrc="https://images.tcdn.com.br/img/img_prod/615061/peixe_tilapia_de_parede_em_alto_relevo_para_decoracao_310_1_20180327215059.jpg"
                    description="lore ipsum"
                    category="Peixe"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
