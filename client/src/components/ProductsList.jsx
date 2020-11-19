import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "./../actions/itemActions";
import PropTypes from "prop-types";



 

class ProductsList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  //Declarando evento Delete
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="products-list">
            {items.map(
              ({ _id, name, sku, descripcion, cantidad, precio, imagen }) => {
                return (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>

                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={imagen}
                          alt={name}
                          style={{width:'100px'}}
                        />
                        <CardBody>
                          <CardTitle tag="h5">{name}</CardTitle>
                          <CardText>
                            SKU: {sku} {descripcion}
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              $ {precio} Cantidad:{cantidad}
                            </small>
                          </CardText>
                        </CardBody>
                      </Card>

                    </ListGroupItem>
                  </CSSTransition>
                );
              }
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ProductsList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ProductsList);
