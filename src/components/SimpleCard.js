import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (props) => {
  const classes = useStyles();
  const { title, description, imgSrc, price, category} = props;

  return (
    <Card>
        <CardHeader
        
        title={title}
      />
      <CardMedia
        style={{height: "150px"}}
        image={imgSrc}
      />
      <CardContent>
          <Typography color="secondary" component="h3">
              Categoria: {category}
          </Typography>
        <Typography variant="body2" component="p">
          {description}
          <br/>
          R$: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color="primary" size="small">Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;